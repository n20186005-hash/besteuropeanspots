const fs = require('fs');
const path = require('path');

const attractionsFile = 'src/data/attractions.json';
const attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

const missingList = [];
let generatedCount = 0;

attractions.forEach(a => {
  const pagePath = path.join(__dirname, 'src', 'app', 'attractions', a.slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    missingList.push(`${a.name} (${a.englishName}) - [地区: ${a.region || a.country}] - Slug: ${a.slug}`);
  } else {
    generatedCount++;
  }
});

console.log(`\n========================================================`);
console.log(`📊 统计结果：`);
console.log(`   - JSON 数据库总条目：${attractions.length}`);
console.log(`   - 实际已生成页面数：${generatedCount}`);
console.log(`   - 尚未生成文章页面：${missingList.length}`);
console.log(`========================================================\n`);

if (missingList.length > 0) {
  console.log(`⚠️ 以下是数据库里有记录，但【还没写/没跑出文章页面】的景点：\n`);
  missingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  console.log(`\n👉 请将上述景点的文本放入 input 文件夹中，并重新运行批量生成脚本。`);
} else {
  console.log(`✅ 完美！所有 JSON 中的景点都已成功生成了页面。`);
}
