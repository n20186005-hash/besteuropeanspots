const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 需要重定向的 slugs 以便后期处理
let updatedCount = 0;

attractions.forEach(a => {
  let modified = false;

  // 1. 处理波斯尼亚和黑塞哥维那
  if (a.countries && a.countries.includes('波黑')) {
    a.countries = a.countries.map(c => c === '波黑' ? '波斯尼亚和黑塞哥维那' : c);
    if (a.country === '波黑') a.country = '波斯尼亚和黑塞哥维那';
    modified = true;
  }
  if (a.country === '波黑（波斯尼亚和黑塞哥维那）' || a.country === '波斯尼亚和黑塞哥维那（波黑）' || a.country === '波黑') {
    a.country = '波斯尼亚和黑塞哥维那';
    modified = true;
  }

  // 2. 处理塞浦路斯和土耳其
  if (a.country && a.country.includes('事实上由北塞浦路斯土耳其共和国控制')) {
    a.country = '塞浦路斯和土耳其';
    a.countries = ['塞浦路斯和土耳其'];
    modified = true;
  } else if (a.countries && a.countries.includes('塞浦路斯')) {
    // 假设之前洗成纯塞浦路斯的，需要退回或判定（根据原数据判断难度较大，我们通过特定景点判断）
    if (a.slug.includes('kyrenia') || a.slug.includes('famagusta') || a.slug.includes('bellapais') || a.slug.includes('salamis')) {
       a.country = '塞浦路斯和土耳其';
       a.countries = ['塞浦路斯和土耳其'];
       modified = true;
    }
  }

  // 3. 处理跨国边界组合词
  if (a.countries && a.countries.length > 1) {
    if (a.countries.includes('塞尔维亚') && a.countries.includes('罗马尼亚')) {
      a.country = '塞尔维亚和罗马尼亚';
      a.countries = ['塞尔维亚和罗马尼亚'];
      modified = true;
    }
    if (a.countries.includes('西班牙') && a.countries.includes('葡萄牙')) {
      a.country = '西班牙和葡萄牙';
      a.countries = ['西班牙和葡萄牙'];
      modified = true;
    }
    if (a.countries.includes('比利时') && a.countries.includes('荷兰')) {
      a.country = '比利时和荷兰';
      a.countries = ['比利时和荷兰'];
      modified = true;
    }
  }

  // 强制修复指定的特殊 slug 的波黑名称
  const bosniaSlugs = [
    'blagaj-tekija-dervish-monastery',
    'vjetrenica-cave',
    'jajce-waterfall-fortress',
    'kravica-waterfall',
    'gradacac-dragon-tower-fortress',
    'tesanj-castle',
    'jajce-falls-and-fortress',
    'stari-most-mostar',
    'mehmed-pasa-sokolovic-bridge-visegrad',
    'pocitelj-ottoman-stone-village'
  ];

  if (bosniaSlugs.includes(a.slug)) {
    a.country = '波斯尼亚和黑塞哥维那';
    a.countries = ['波斯尼亚和黑塞哥维那'];
    a.countrySlug = 'bosnia'; // keep URL slug short
    modified = true;
  }

  if (modified) updatedCount++;
});

fs.writeFileSync(dataPath, JSON.stringify(attractions, null, 2), 'utf8');
console.log(`V5 Final Region cleanup complete. Updated ${updatedCount} records.`);