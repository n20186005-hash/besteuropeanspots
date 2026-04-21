const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const historySpots = attractions.filter(a => 
  (Array.isArray(a.category) && a.category.includes('history')) || 
  (a.slug && a.slug.endsWith('-history'))
);

console.log(`Found ${historySpots.length} history spots.`);
