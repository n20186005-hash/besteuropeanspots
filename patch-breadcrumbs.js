const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));

const getAttractionData = (slug) => {
  return attractions.find(a => a.slug === slug);
};

function patchFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const data = getAttractionData(slug);
  if (!data || !data.countrySlug) return;

  const countryName = data.country;
  const countrySlug = data.countrySlug;

  // Regex to match the second item in Breadcrumb
  const breadcrumbRegex = /(<Breadcrumb\s+items=\{\[\s*\{\s*label:\s*'首页',\s*href:\s*'\/'\s*\},)(\s*\{\s*label:\s*'[^']+',\s*href:\s*'\/[^']+'\s*\},)/;

  if (breadcrumbRegex.test(content)) {
    // Replace the category with Country
    content = content.replace(breadcrumbRegex, `$1\n            { label: '${countryName}', href: '/destinations/${countrySlug}' },`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function run() {
  const dir = path.join(__dirname, 'src', 'app', 'attractions');
  const folders = fs.readdirSync(dir);
  let count = 0;
  let changedCount = 0;
  
  folders.forEach(folder => {
    const p = path.join(dir, folder, 'page.tsx');
    if (fs.existsSync(p)) {
      count++;
      // check if changed
      const oldStat = fs.statSync(p).mtimeMs;
      patchFile(p, folder);
      const newStat = fs.statSync(p).mtimeMs;
      if (oldStat !== newStat) changedCount++;
    }
  });
  console.log(`Checked ${count} files. Patched breadcrumbs in ${changedCount} files successfully.`);
}

run();