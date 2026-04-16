const fs = require('fs');

const attractionsFile = 'src/data/attractions.json';
let attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

let fixedCount = 0;

attractions = attractions.map(a => {
  if (Array.isArray(a.category)) {
    // 检查是否有多余的嵌套数组或字符串格式不对
    const newCategory = [];
    a.category.forEach(item => {
      if (typeof item === 'string') {
        newCategory.push(item);
      } else if (Array.isArray(item)) {
        // 如果错误地嵌套了数组，展平它
        newCategory.push(...item);
        fixedCount++;
      }
    });
    a.category = [...new Set(newCategory)]; // 去重
  } else if (typeof a.category === 'string') {
    // 如果 category 是字符串，转成数组
    a.category = [a.category];
    fixedCount++;
  } else if (!a.category) {
    // 如果完全没有 category 字段，默认给个空的或默认分类
    a.category = [];
    fixedCount++;
  }
  return a;
});

fs.writeFileSync(attractionsFile, JSON.stringify(attractions, null, 2));
console.log(`Successfully fixed categories for ${fixedCount} attractions.`);
