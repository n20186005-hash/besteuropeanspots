const fs = require('fs');
const path = require('path');

// 永久黑名单 - 这些链接将永远不会被生成
const permanentBlacklist = [
  'conques',
  'ribe', 
  'sigtuna',
  'rhodes-old-town',
  'delphi',
  'nafplio',
  'perast',
  'modica',
  'szentendre',
  'murten-morat',
  'chur',
  'stralsund',
  'durbuy',
  'kaysersberg'
];

// 保存黑名单到文件
const blacklistPath = path.join(__dirname, 'permanent-blacklist.json');
fs.writeFileSync(blacklistPath, JSON.stringify(permanentBlacklist, null, 2));

console.log('✅ 永久黑名单已创建，包含以下 ' + permanentBlacklist.length + ' 个链接：');
permanentBlacklist.forEach(slug => console.log('  - ' + slug));

// 清理现有文件
let cleanedCount = 0;
permanentBlacklist.forEach(slug => {
  const pageDir = path.join(__dirname, 'src/app/attractions', slug);
  if (fs.existsSync(pageDir)) {
    fs.rmSync(pageDir, { recursive: true, force: true });
    cleanedCount++;
    console.log('🗑️ 已删除文件夹: ' + slug);
  }
});

console.log('\n✅ 清理完成，共删除 ' + cleanedCount + ' 个文件夹');

// 从 attractions.json 中移除这些条目
const attractionsPath = path.join(__dirname, 'src/data/attractions.json');
if (fs.existsSync(attractionsPath)) {
  let attractions = JSON.parse(fs.readFileSync(attractionsPath, 'utf8'));
  const beforeCount = attractions.length;
  attractions = attractions.filter(a => !permanentBlacklist.includes(a.slug));
  const afterCount = attractions.length;
  
  fs.writeFileSync(attractionsPath, JSON.stringify(attractions, null, 2));
  console.log('✅ 已从 attractions.json 中移除 ' + (beforeCount - afterCount) + ' 个黑名单条目');
}

console.log('\n🛡️ 永久黑名单系统已激活，这些链接将永远不会被生成！');