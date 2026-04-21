const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));

const countryMap = {
  '丹麦': { name: '丹麦', slug: 'denmark' },
  '伯尔尼州': { name: '瑞士', slug: 'switzerland' }, // Fix anomaly
  '保加利亚': { name: '保加利亚', slug: 'bulgaria' },
  '克罗地亚': { name: '克罗地亚', slug: 'croatia' },
  '匈牙利': { name: '匈牙利', slug: 'hungary' },
  '北马其顿': { name: '北马其顿', slug: 'north-macedonia' },
  '卢森堡': { name: '卢森堡', slug: 'luxembourg' },
  '塞尔维亚': { name: '塞尔维亚', slug: 'serbia' },
  '塞尔维亚 & 罗马尼亚': { name: '塞尔维亚', slug: 'serbia' },
  '塞浦路斯': { name: '塞浦路斯', slug: 'cyprus' },
  '塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）': { name: '塞浦路斯', slug: 'cyprus' },
  '奥地利': { name: '奥地利', slug: 'austria' },
  '威尼托': { name: '意大利', slug: 'italy' }, // Fix anomaly
  '希腊': { name: '希腊', slug: 'greece' },
  '德国': { name: '德国', slug: 'germany' },
  '意大利': { name: '意大利', slug: 'italy' },
  '拉脱维亚': { name: '拉脱维亚', slug: 'latvia' },
  '挪威': { name: '挪威', slug: 'norway' },
  '捷克': { name: '捷克', slug: 'czech-republic' },
  '斯洛伐克': { name: '斯洛伐克', slug: 'slovakia' },
  '斯洛文尼亚': { name: '斯洛文尼亚', slug: 'slovenia' },
  '比利时': { name: '比利时', slug: 'belgium' },
  '比利时 / 荷兰': { name: '比利时', slug: 'belgium' },
  '比利时、荷兰、卢森堡': { name: '比利时', slug: 'belgium' },
  '法国': { name: '法国', slug: 'france' },
  '波兰': { name: '波兰', slug: 'poland' },
  '波斯尼亚和黑塞哥维那': { name: '波黑', slug: 'bosnia-and-herzegovina' },
  '波斯尼亚和黑塞哥维那（波黑）': { name: '波黑', slug: 'bosnia-and-herzegovina' },
  '波黑': { name: '波黑', slug: 'bosnia-and-herzegovina' },
  '波黑（波斯尼亚和黑塞哥维那）': { name: '波黑', slug: 'bosnia-and-herzegovina' },
  '爱沙尼亚': { name: '爱沙尼亚', slug: 'estonia' },
  '瑞典': { name: '瑞典', slug: 'sweden' },
  '瑞士': { name: '瑞士', slug: 'switzerland' },
  '科索沃': { name: '科索沃', slug: 'kosovo' },
  '立陶宛': { name: '立陶宛', slug: 'lithuania' },
  '罗马尼亚': { name: '罗马尼亚', slug: 'romania' },
  '芬兰': { name: '芬兰', slug: 'finland' },
  '英国': { name: '英国', slug: 'united-kingdom' },
  '荷兰': { name: '荷兰', slug: 'netherlands' },
  '葡萄牙': { name: '葡萄牙', slug: 'portugal' },
  '西班牙': { name: '西班牙', slug: 'spain' },
  '西班牙，葡萄牙': { name: '西班牙', slug: 'spain' },
  '阿尔巴尼亚': { name: '阿尔巴尼亚', slug: 'albania' },
  '马耳他': { name: '马耳他', slug: 'malta' },
  '黑山': { name: '黑山', slug: 'montenegro' }
};

let updated = 0;
attractions.forEach(a => {
  if (a.country && countryMap[a.country]) {
    const mapInfo = countryMap[a.country];
    if (a.country !== mapInfo.name || !a.countrySlug) {
      a.country = mapInfo.name;
      a.countrySlug = mapInfo.slug;
      updated++;
    }
  } else if (!a.country) {
    a.country = '欧洲';
    a.countrySlug = 'europe';
    updated++;
  }
});

fs.writeFileSync(attractionsDataPath, JSON.stringify(attractions, null, 2), 'utf8');
console.log(`Normalized ${updated} countries and added countrySlug.`);
