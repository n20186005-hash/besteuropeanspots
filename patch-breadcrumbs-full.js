const fs = require('fs');
const path = require('path');

const attractionsDir = path.join(__dirname, 'src', 'app', 'attractions');
const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const folders = fs.readdirSync(attractionsDir);
let patched = 0;

folders.forEach(slug => {
  const pagePath = path.join(attractionsDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');
  const item = attractions.find(a => a.slug === slug);
  if (!item) return;

  // 判断主分类
  let catId = 'encyclopedia';
  let catName = '景点百科';
  
  if (slug.endsWith('-history')) {
    catId = 'history';
    catName = '历史人文';
  } else if (slug.endsWith('-travelogue')) {
    catId = 'travelogue';
    catName = '景点游记';
  } else if (item.category && item.category.length > 0) {
    // 尽量根据数据匹配主要分类
    catId = item.category[0];
    if (catId === 'history') catName = '历史人文';
    else if (catId === 'travelogue') catName = '景点游记';
  }

  const country = item.country || '欧洲';
  const countrySlug = item.countrySlug || 'europe';
  const city = item.city || '';
  const name = item.name || '';

  let itemsStr = `\n            { label: '首页', href: '/' },\n`;
  itemsStr += `            { label: '${catName}', href: '/category/${catId}' },\n`;
  itemsStr += `            { label: '${country}', href: '/destinations/${countrySlug}' },\n`;
  if (city) {
    itemsStr += `            { label: '${city.replace(/'/g, "\\'")}', href: '/destinations/${countrySlug}' },\n`;
  }
  itemsStr += `            { label: '${name.replace(/'/g, "\\'")}', href: '/attractions/${slug}' },\n          `;

  const newBreadcrumb = `<Breadcrumb\n          items={[${itemsStr}]}\n        />`;
  
  const breadcrumbRegex = /<Breadcrumb\s+items=\{\[[\s\S]*?\]\}\s*\/>/;
  if (breadcrumbRegex.test(content)) {
    content = content.replace(breadcrumbRegex, newBreadcrumb);
    fs.writeFileSync(pagePath, content, 'utf8');
    patched++;
  }
});

console.log(`Successfully patched breadcrumbs in ${patched} files.`);
