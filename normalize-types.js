const fs = require('fs');

const attractionsFile = 'src/data/attractions.json';
let attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

let fixedRegionCount = 0;
let fixedTypeCount = 0;

// 常见国家标准映射表
const validCountries = new Set([
  '法国', '比利时', '卢森堡', '荷兰', '德国', '意大利', '西班牙', '葡萄牙', '奥地利', '瑞士',
  '捷克', '斯洛伐克', '匈牙利', '克罗地亚', '波黑', '黑山', '希腊', '瑞典', '挪威', '芬兰', '丹麦',
  '斯洛文尼亚', '北马其顿', '阿尔巴尼亚', '科索沃', '爱沙尼亚', '立陶宛', '塞尔维亚', '罗马尼亚', '保加利亚', '波兰', '拉脱维亚'
]);

// 类型关键词提取映射（优先级从上到下）
const typeMapping = [
  { keyword: '城堡', result: '城堡' },
  { keyword: '宫殿', result: '宫殿' },
  { keyword: '修道院', result: '修道院' },
  { keyword: '教堂', result: '大教堂' },
  { keyword: '大教堂', result: '大教堂' },
  { keyword: '遗址', result: '历史遗迹' },
  { keyword: '遗迹', result: '历史遗迹' },
  { keyword: '考古', result: '历史遗迹' },
  { keyword: '废墟', result: '历史遗迹' },
  { keyword: '自然', result: '自然景观' },
  { keyword: '湖', result: '自然景观' },
  { keyword: '山', result: '自然景观' },
  { keyword: '古城', result: '中世纪古城' },
  { keyword: '老城', result: '中世纪古城' },
  { keyword: '古镇', result: '中世纪古城' },
  { keyword: '小镇', result: '特色小镇' },
  { keyword: '村', result: '特色小镇' },
  { keyword: '广场', result: '广场与街区' },
  { keyword: '街区', result: '广场与街区' },
  { keyword: '民居', result: '特色小镇' },
  { keyword: '大学城', result: '历史名城' },
  { keyword: '建筑', result: '历史建筑' }
];

attractions = attractions.map(a => {
  // 1. 清理 region (国家)
  if (a.region) {
    let newRegion = a.region.split(/[・、，,]/)[0].trim();
    // 去掉结尾的无意义字符
    newRegion = newRegion.replace(/地区|周边|附近/g, '');
    
    // 如果不在白名单里，尝试从 country 字段获取
    if (!validCountries.has(newRegion) && a.country) {
       let tempCountry = a.country.split(/[・、，,]/)[0].trim();
       if (validCountries.has(tempCountry)) {
           newRegion = tempCountry;
       }
    }
    
    if (a.region !== newRegion) {
      a.region = newRegion;
      fixedRegionCount++;
    }
  }

  // 2. 清理 type (类型)
  if (a.type) {
    let newType = '其他';
    // 遍历映射表提取核心类型
    for (const mapping of typeMapping) {
      if (a.type.includes(mapping.keyword)) {
        newType = mapping.result;
        break;
      }
    }
    
    if (a.type !== newType) {
      a.type = newType;
      fixedTypeCount++;
    }
  }

  return a;
});

fs.writeFileSync(attractionsFile, JSON.stringify(attractions, null, 2));
console.log(`Successfully normalized regions for ${fixedRegionCount} attractions.`);
console.log(`Successfully normalized types for ${fixedTypeCount} attractions.`);
