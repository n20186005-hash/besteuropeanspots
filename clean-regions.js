const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const regionMapping = {
  'France': '法国',
  'Germany': '德国',
  'Italy': '意大利',
  'Greece': '希腊',
  '波黑（波斯尼亚和黑塞哥维那）': '波黑',
  '波斯尼亚和黑塞哥维那（波黑）': '波黑',
  '波斯尼亚和黑塞哥维那': '波黑',
  '塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）': '塞浦路斯',
  '威尼托': '意大利',
  '伯尔尼州': '瑞士'
};

let updatedCount = 0;
let newAttractions = [];

attractions.forEach(a => {
  let countries = [a.country || ''];
  
  // Split multiple countries
  const multiRegex = /[\&\/，与、]/;
  if (multiRegex.test(a.country)) {
    countries = a.country.split(multiRegex).map(c => c.trim()).filter(Boolean);
  }

  // Map to standard names
  countries = countries.map(c => regionMapping[c] || c);

  // If there's multiple countries, we create multiple country tags (For this simple JSON structure, 
  // we might just pick the primary one for 'country' and store all in an array, or duplicate. 
  // Given NextJS structure, usually an array `countries` is better, but let's update `country` to the first one
  // and add `countries` array for filtering)
  
  const mainCountry = countries[0];
  
  if (a.country !== mainCountry || countries.length > 1) {
    a.country = mainCountry;
    a.countries = countries;
    updatedCount++;
  } else if (!a.countries) {
    a.countries = [mainCountry];
  }
  
  newAttractions.push(a);
});

fs.writeFileSync(dataPath, JSON.stringify(newAttractions, null, 2), 'utf8');
console.log(`Region cleanup complete. Updated ${updatedCount} records.`);