const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let errors = [];
let warnings = [];
let nameMap = new Map();
let slugMap = new Map();
let descriptionMap = new Map();

attractions.forEach(a => {
  // Check for duplicate slugs
  if (slugMap.has(a.slug)) {
    errors.push(`Duplicate slug found: ${a.slug}`);
  } else {
    slugMap.set(a.slug, a.name);
  }

  // Check for duplicate names (exact match)
  if (nameMap.has(a.name)) {
    warnings.push(`Duplicate exact name found: ${a.name} (Slugs: ${a.slug} and ${nameMap.get(a.name).slug})`);
  } else {
    nameMap.set(a.name, a);
  }

  // Check for double suffixes
  if (a.slug.endsWith('-history-history') || a.slug.endsWith('-travelogue-travelogue')) {
    errors.push(`Double suffix found in slug: ${a.slug}`);
  }

  // Check for "undefined" or null strings in fields
  ['name', 'englishName', 'description', 'country', 'city'].forEach(field => {
    if (!a[field] || a[field] === 'undefined' || a[field] === 'null') {
      warnings.push(`Missing or invalid field '${field}' in ${a.slug}`);
    }
  });

  // Check for duplicate descriptions (plagiarism/copy-paste errors)
  if (a.description && a.description.length > 20) {
    const shortDesc = a.description.substring(0, 50);
    if (descriptionMap.has(shortDesc)) {
      warnings.push(`Highly similar description found between ${a.slug} and ${descriptionMap.get(shortDesc)}`);
    } else {
      descriptionMap.set(shortDesc, a.slug);
    }
  }
});

console.log('=== ERRORS ===');
console.log(errors.length ? errors.join('\n') : 'None');
console.log('\n=== WARNINGS ===');
console.log(warnings.length ? warnings.join('\n') : 'None');
console.log(`\nTotal checked: ${attractions.length} attractions`);
