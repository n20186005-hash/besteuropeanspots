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
    
    // 强制清理那些可能残留的括号
    if (mapped.includes('波斯尼亚和黑塞哥维那')) {
        mapped = '波黑';
    }
    if (mapped.includes('塞浦路斯（事实上')) {
        mapped = '塞浦路斯';
    }
    if (mapped.includes('北塞浦路斯')) {
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
        if (trimmed) finalCountries.add(regionMapping[trimmed] || trimmed);
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

  // 修复 countrySlug (如果原来是指向旧名字，统一指向 bosnia / cyprus 等)
  if (a.countries.includes('波黑')) {
    a.countrySlug = 'bosnia';
  } else if (a.countries.includes('塞浦路斯')) {
    a.countrySlug = 'cyprus';
  }

  if (oldCountry !== a.country || oldCountriesStr !== JSON.stringify(a.countries)) {
    updatedCount++;
  }
  
  newAttractions.push(a);
});

fs.writeFileSync(dataPath, JSON.stringify(newAttractions, null, 2), 'utf8');
console.log(`V3 Region cleanup complete. Updated ${updatedCount} records.`);