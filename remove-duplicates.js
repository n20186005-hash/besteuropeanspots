const fs = require('fs');
const path = require('path');

const slugsToDelete = [
  'conques',
  'ribe',
  'sigtuna',
  'rhodes-old-town',
  'delphi',
  'nafplio',
  'perast',
  'szentendre',
  'murten-morat',
  'chur',
  'stralsund',
  'durbuy',
  'kaysersberg'
];

// 1. 从 JSON 数据库中删除
const attractionsFile = path.join(__dirname, 'src/data/attractions.json');
let attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

const initialCount = attractions.length;
attractions = attractions.filter(a => !slugsToDelete.includes(a.slug));
const deletedCount = initialCount - attractions.length;

fs.writeFileSync(attractionsFile, JSON.stringify(attractions, null, 2));
console.log(`✅ 已从 attractions.json 中删除了 ${deletedCount} 条重复数据。`);

// 2. 从文件系统中删除页面文件夹
let deletedFolders = 0;
slugsToDelete.forEach(slug => {
  const dirPath = path.join(__dirname, 'src/app/attractions', slug);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    deletedFolders++;
    console.log(`   🗑️ 删除了文件夹: ${slug}`);
  }
});
console.log(`✅ 已从 src/app/attractions/ 删除了 ${deletedFolders} 个重复页面文件夹。`);

// 3. 重新生成 Sitemap
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const baseUrl = 'https://www.besteuropeanspots.com';
const currentDate = new Date().toISOString().split('T')[0];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// 首页
sitemapContent += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

// 分类页
const allCategories = ['encyclopedia', 'travelogue', 'history'];
allCategories.forEach(c => {
  sitemapContent += `  <url>\n    <loc>${baseUrl}/category/${c}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

// 景点页 (只保留实际存在的)
let validPagesCount = 0;
attractions.forEach(a => {
  const pageDir = path.join(__dirname, 'src', 'app', 'attractions', a.slug);
  if (fs.existsSync(path.join(pageDir, 'page.tsx'))) {
    sitemapContent += `  <url>\n    <loc>${baseUrl}/attractions/${a.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    validPagesCount++;
  }
});

sitemapContent += `</urlset>`;
fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
console.log(`✅ 已更新 sitemap.xml，当前包含 ${validPagesCount + 4} 个链接。`);
