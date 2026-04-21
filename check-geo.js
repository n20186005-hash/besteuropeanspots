const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));

const countries = new Set();
const regions = new Set();

attractions.forEach(a => {
  if (a.country) countries.add(a.country);
  if (a.region) regions.add(a.region);
});

console.log('Countries:', Array.from(countries).sort());
console.log('Regions:', Array.from(regions).sort());
