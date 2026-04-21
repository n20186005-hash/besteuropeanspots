const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

attractions.forEach(a => {
  if (a.slug === 'balkan-castle-salt-mine-journey') {
    a.country = '罗马尼亚';
    a.city = '图尔达';
    a.countries = ['罗马尼亚'];
    a.countrySlug = 'romania';
  }
});

fs.writeFileSync(dataPath, JSON.stringify(attractions, null, 2), 'utf8');
console.log('Fixed turda salt mine data in attractions.json');