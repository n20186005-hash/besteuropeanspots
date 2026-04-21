const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
let attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 标准 6 大分类
const standardTypes = {
  '城镇与村落': ['古城', '老城', '特色小镇', '古镇', '小镇', '城镇', '村落', 'town', 'village', '中世纪古城', '历史城镇', '中世纪小镇', '山城', '渔村', '渔港', '童话村'],
  '建筑与地标': ['城堡', '要塞', '宫殿', '桥梁', '塔', '建筑', '庄园', '灯塔', '大桥', '城墙', '防线', '水坝', '堡垒', '城池'],
  '宗教遗产': ['教堂', '大教堂', '修道院', '神庙', '寺庙', '修道', '宗教', '朝圣', '清真寺', '礼拜堂', '大殿'],
  '历史遗迹与考古': ['考古', '遗址', '废墟', '纪念碑', '遗迹', '古罗马', '陵墓', '墓地', '洞穴遗址', '史前'],
  '文化艺术与休闲': ['博物馆', '工业遗产', '公园', '温泉', '浴场', '艺术', '剧院', '剧场', '音乐厅', '酒庄', '画廊', '休闲', '文化景观', '广场', '集市', '大学', '图书馆'],
  '自然景观': ['湖泊', '国家公园', '溶洞', '海岛', '风光', '自然', '山脉', '森林', '海滩', '悬崖', '峡谷', '海岸', '盐田', '冰川', '温泉(自然)', '瀑布', '地质', '陨石坑']
};

let updatedCount = 0;

attractions.forEach(a => {
  const originalType = (a.type || '').toLowerCase();
  
  // 匹配逻辑
  let newType = '城镇与村落'; // 默认 fallback
  let matched = false;

  for (const [mainCat, keywords] of Object.entries(standardTypes)) {
    if (keywords.some(kw => originalType.includes(kw))) {
      newType = mainCat;
      matched = true;
      break;
    }
  }
  
  // 如果实在没有匹配到，我们从 description 里猜一下
  if (!matched && a.description) {
    for (const [mainCat, keywords] of Object.entries(standardTypes)) {
      if (keywords.some(kw => a.description.includes(kw))) {
        newType = mainCat;
        matched = true;
        break;
      }
    }
  }

  // 记录老标签到 raw_type，并替换 type 为标准分类
  if (!a.raw_type) {
    a.raw_type = a.type;
  }
  if (a.type !== newType) {
    a.type = newType;
    updatedCount++;
  }
});

fs.writeFileSync(dataPath, JSON.stringify(attractions, null, 2), 'utf8');
console.log(`Type normalization complete. Updated ${updatedCount} records to standard types.`);
