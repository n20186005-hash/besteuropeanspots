const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));

const checkList = [
  '阿尔比', '孔克', '勒皮', '科尔德', '迪南', '瓦讷', '特鲁瓦', '罗卡马杜尔', '萨拉拉卡内达', '萨尔拉拉卡内达', '凯斯贝格', '凯瑟斯贝格', '里屈埃维', '戈尔代', '石头城', '鲁西永', '红土城', '普罗万', '德尔比', '迪尔比', '图尔奈', '梅赫伦', '维安登', '菲安登', '埃希特纳赫', '奎德林堡', '戈斯拉尔', '什未林', '特里尔', '班贝格', '丁克尔斯比尔', '讷德林根', '梅尔斯堡', '科赫姆', '图宾根', '策勒', '蒙绍', '维斯马', '施特拉尔松德', '白露里治奥', '沃尔泰拉', '莱切', '曼托瓦', '拉文纳', '乌尔比诺', '费拉拉', '阿斯科利皮切诺', '斯波莱托', '马泰拉', '龙达', '昆卡', '阿维拉', '卡塞雷斯', '桑蒂利亚纳', '吉马良斯', '埃武拉', '奥比杜什', '布拉加', '蒙桑图', '梅尔克', '杜伦斯泰因', '杜恩施泰因', '格拉茨', '因斯布鲁克', '哈尔', '巴德伊舍', '圣加仑', '图恩', '格吕耶尔', '贝林佐纳', '锡永', '库尔', '阿彭策尔', '穆尔滕', '泰尔奇', '库特纳霍拉', '克鲁姆洛夫', '班斯卡什佳夫尼察', '班斯卡-什佳夫尼察', '莱沃恰', '斯皮什', '杰尔', '埃格尔', '圣安德烈', '埃斯泰尔戈姆', '托卡伊', '皮兰', '罗维尼', '普拉', '特罗吉尔', '科尔丘拉', '莫斯塔尔', '佩拉斯特', '奥赫里德', '普罗夫迪夫', '大特尔诺沃', '锡比乌', '锡吉什瓦拉', '培拉特', '吉诺卡斯特', '纳夫普利翁', '莫奈姆瓦夏', '梅黛奥拉', '哈尼亚', '罗德岛', '林多斯', '雷西姆诺', '维斯比', '锡格蒂纳', '于斯塔德', '勒罗斯', '波尔沃', '图尔库', '劳马'
];

let duplicates = [];

checkList.forEach(kw => {
  const matches = attractions.filter(a => {
    if (!a.name && !a.englishName && !a.slug) return false;
    const searchString = (a.name || '') + ' ' + (a.englishName || '') + ' ' + (a.slug || '');
    return searchString.includes(kw);
  });
  if (matches.length > 1) {
    duplicates.push({ kw, matches: matches.map(m => ({ name: m.name, slug: m.slug, url: `https://www.besteuropeanspots.com/attractions/${m.slug}` })) });
  }
});

fs.writeFileSync('dupes-result.json', JSON.stringify(duplicates, null, 2), 'utf8');
console.log('done');