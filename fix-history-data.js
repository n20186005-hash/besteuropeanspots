const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 修补旧数据，确保所有带有 "-history" 的 slug 的记录，其 category 数组中都明确包含 "history"
let modified = 0;
attractions.forEach(a => {
  if (a.slug.endsWith('-history')) {
    if (!a.category) a.category = [];
    if (!a.category.includes('history')) {
      a.category.push('history');
      modified++;
    }
  }
});

console.log(`✅ 修复了 ${modified} 条历史记录的分类标签`);
fs.writeFileSync(jsonPath, JSON.stringify(attractions, null, 2), 'utf8');