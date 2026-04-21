const fs = require('fs');
const path = require('path');
const { parsePageFile, writePageData } = require('./page-data-utils');

const rootDir = __dirname;
const attractionsDir = path.join(rootDir, 'src', 'app', 'attractions');
const outputDir = path.join(rootDir, 'src', 'data', 'attraction-pages');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const entries = fs.readdirSync(attractionsDir, { withFileTypes: true });
let migratedCount = 0;
let skippedCount = 0;

entries.forEach((entry) => {
  if (!entry.isDirectory() || entry.name === '[slug]') {
    return;
  }

  const pageFile = path.join(attractionsDir, entry.name, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    skippedCount++;
    return;
  }

  const pageData = parsePageFile(pageFile);
  writePageData(rootDir, pageData);
  migratedCount++;
});

console.log(`Migrated ${migratedCount} attraction pages to JSON data files.`);
console.log(`Skipped ${skippedCount} directories without page.tsx.`);
