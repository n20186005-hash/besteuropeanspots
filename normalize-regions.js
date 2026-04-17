const fs = require('fs');

const attractionsFile = 'src/data/attractions.json';
let attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

let fixedCount = 0;

attractions = attractions.map(a => {
  if (a.region) {
    // 提取国家名，如果含有连字符或逗号，只取第一个。如果包含“、”也处理
    let newRegion = a.region.split(/[・、，,]/)[0].trim();
    
    // 如果修改了，更新计数
    if (a.region !== newRegion) {
      a.region = newRegion;
      fixedCount++;
    }
  }
  return a;
});

fs.writeFileSync(attractionsFile, JSON.stringify(attractions, null, 2));
console.log(`Successfully normalized regions for ${fixedCount} attractions.`);
