const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const attractionsDir = path.join(__dirname, 'src', 'app', 'attractions');

const redirects = [];
let removedCount = 0;
let nameMap = new Map();

const filteredAttractions = [];

attractions.forEach(a => {
  if (nameMap.has(a.name)) {
    const existing = nameMap.get(a.name);
    // Keep the one without '-history' if possible, or whichever has more categories
    const oldSlug = a.slug;
    const newSlug = existing.slug;
    
    // Merge categories
    if (a.category && Array.isArray(a.category)) {
      if (!existing.category) existing.category = [];
      a.category.forEach(c => {
        if (!existing.category.includes(c)) existing.category.push(c);
      });
    }
    
    redirects.push({ oldSlug, newSlug });
    removedCount++;
  } else {
    nameMap.set(a.name, a);
    filteredAttractions.push(a);
  }
});

// Update json
fs.writeFileSync(dataPath, JSON.stringify(filteredAttractions, null, 2), 'utf8');
console.log(`Removed ${removedCount} duplicate exact names from attractions.json.`);

// Delete physical folders
let deletedFolders = 0;
redirects.forEach(({ oldSlug }) => {
  const folderPath = path.join(attractionsDir, oldSlug);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    deletedFolders++;
  }
});
console.log(`Deleted ${deletedFolders} physical folders.`);

// Append to vercel.json
const vercelJsonPath = path.join(__dirname, 'vercel.json');
let vercelConfig = { redirects: [] };
if (fs.existsSync(vercelJsonPath)) {
  vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
  if (!vercelConfig.redirects) vercelConfig.redirects = [];
}

let newRedirects = 0;
redirects.forEach(({ oldSlug, newSlug }) => {
  const source = `/attractions/${oldSlug}(/?)`;
  const destination = `/attractions/${newSlug}`;
  const exists = vercelConfig.redirects.some(r => r.source === source);
  if (!exists) {
    vercelConfig.redirects.push({ source, destination, permanent: true });
    newRedirects++;
  }
});

fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelConfig, null, 2), 'utf8');
console.log(`Added ${newRedirects} new redirects to vercel.json.`);
