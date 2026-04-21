const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 扩展版映射规则
const regionMapping = {
  'France': '法国',
  'Germany': '德国',
  'Italy': '意大利',
  'Greece': '希腊',
  'USA': '美国',
  '波斯尼亚和黑塞哥维那': '波黑',
  '波黑（波斯尼亚和黑塞哥维那）': '波黑',
  '波斯尼亚和黑塞哥维那（波黑）': '波黑',
  '塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）': '塞浦路斯',
  '大不列颠及北爱尔兰联合王国': '英国',
  '威尼托': '意大利',
  '伯尔尼州': '瑞士',
  '加州': '美国',
  '夏威夷': '美国',
  '苏格兰': '英国',
  '英格兰': '英国',
  '威尔士': '英国',
  '北爱尔兰': '英国',
  '塞尔维亚 & 罗马尼亚': ['塞尔维亚', '罗马尼亚'],
  '西班牙，葡萄牙': ['西班牙', '葡萄牙'],
  '比利时 / 荷兰': ['比利时', '荷兰'],
  '斯洛伐克与匈牙利边境地区': ['斯洛伐克', '匈牙利'],
  '奥地利与瑞士': ['奥地利', '瑞士']
};

let updatedCount = 0;
let newAttractions = [];

attractions.forEach(a => {
  let rawCountries = [a.country || ''];
  let parsedCountries = [];

  // 第一层映射：处理硬编码的复杂跨国映射
  rawCountries.forEach(c => {
    if (regionMapping[c]) {
      const mapped = regionMapping[c];
      if (Array.isArray(mapped)) {
        parsedCountries.push(...mapped);
      } else {
        parsedCountries.push(mapped);
      }
    } else {
      parsedCountries.push(c);
    }
  });

  // 第二层：通用符号拆分 (仅对依然包含连接符的字符串)
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

  if (oldCountry !== a.country || oldCountriesStr !== JSON.stringify(a.countries)) {
    updatedCount++;
  }
  
  newAttractions.push(a);
});

fs.writeFileSync(dataPath, JSON.stringify(newAttractions, null, 2), 'utf8');
console.log(`V2 Region cleanup complete. Updated ${updatedCount} records.`);
