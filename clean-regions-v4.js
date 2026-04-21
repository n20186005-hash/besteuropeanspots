const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 扩展版映射规则，将所有波黑变体统一为 "波黑"
const regionMapping = {
  '波斯尼亚和黑塞哥维那': '波黑',
  '波黑（波斯尼亚和黑塞哥维那）': '波黑',
  '波斯尼亚和黑塞哥维那（波黑）': '波黑',
  '波黑(波斯尼亚和黑塞哥维那)': '波黑',
  '波斯尼亚和黑塞哥维那(波黑)': '波黑',
  'Bosnia and Herzegovina': '波黑',
  '塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）': '塞浦路斯',
  '塞浦路斯(事实上由北塞浦路斯土耳其共和国控制)': '塞浦路斯'
};

let updatedCount = 0;
let newAttractions = [];

attractions.forEach(a => {
  let rawCountries = a.countries && a.countries.length > 0 ? a.countries : [a.country || ''];
  let parsedCountries = [];

  rawCountries.forEach(c => {
    if (!c) return;
    let mapped = regionMapping[c] || c;
    
    // 强制正则清理各种括号变体
    if (mapped.match(/波斯尼亚和黑塞哥维那/)) {
        mapped = '波黑';
    }
    if (mapped.match(/塞浦路斯/)) {
        mapped = '塞浦路斯';
    }

    parsedCountries.push(mapped);
  });

  // 第二层：通用符号拆分 (针对依然包含连接符的字符串)
  let finalCountries = new Set();
  const multiRegex = /[\&\/，与、]/;
  
  parsedCountries.forEach(c => {
    if (multiRegex.test(c)) {
      c.split(multiRegex).forEach(sub => {
        const trimmed = sub.trim();
        if (trimmed) {
          let finalName = regionMapping[trimmed] || trimmed;
          if (finalName.match(/波斯尼亚和黑塞哥维那/)) finalName = '波黑';
          if (finalName.match(/塞浦路斯/)) finalName = '塞浦路斯';
          finalCountries.add(finalName);
        }
      });
    } else {
      finalCountries.add(c);
    }
  });

  const countriesArray = Array.from(finalCountries).filter(Boolean);
  const mainCountry = countriesArray[0] || '欧洲';

  // 检测是否有变化
  const oldCountry = a.country;
  const oldCountriesStr = JSON.stringify(a.countries || []);
  
  a.country = mainCountry;
  a.countries = countriesArray;

  if (oldCountry !== a.country || oldCountriesStr !== JSON.stringify(a.countries)) {
    updatedCount++;
  }
  
  newAttractions.push(a);
});

fs.writeFileSync(dataPath, JSON.stringify(newAttractions, null, 2), 'utf8');
console.log(`V4 Region cleanup complete. Updated ${updatedCount} records.`);