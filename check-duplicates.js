const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));

// Keywords to search for duplicates
const checkList = [
  ['阿尔比', 'Albi'],
  ['孔克', 'Conques'],
  ['勒皮', 'Le Puy'],
  ['科尔德叙谢勒', '科尔德圣谢鲁', 'Cordes'],
  ['迪南中世纪', '迪南老城', 'Dinan'],
  ['瓦讷', 'Vannes'],
  ['特鲁瓦', 'Troyes'],
  ['罗卡马杜尔', 'Rocamadour'],
  ['萨尔拉拉卡内达', '萨拉拉卡内达', 'Sarlat'],
  ['凯斯贝格', '凯瑟斯贝格', 'Kaysersberg'],
  ['里屈埃维', 'Riquewihr'],
  ['戈尔代', '石头城', 'Gordes'],
  ['鲁西永', '红土城', 'Roussillon'],
  ['普罗万', 'Provins'],
  ['迪南', 'Dinant'], // Dinant (Belgium) vs Dinan (France)
  ['德尔比', '迪尔比', 'Durbuy'],
  ['图尔奈', 'Tournai'],
  ['梅赫伦', 'Mechelen'],
  ['维安登', '菲安登', 'Vianden'],
  ['埃希特纳赫', 'Echternach'],
  ['奎德林堡', 'Quedlinburg'],
  ['戈斯拉尔', 'Goslar'],
  ['什未林', 'Schwerin'],
  ['特里尔', 'Trier'],
  ['班贝格', 'Bamberg'],
  ['丁克尔斯比尔', 'Dinkelsbühl'],
  ['讷德林根', 'Nördlingen'],
  ['梅尔斯堡', 'Meersburg'],
  ['科赫姆', 'Cochem'],
  ['图宾根', 'Tübingen'],
  ['策勒', 'Celle'],
  ['蒙绍', 'Monschau'],
  ['维斯马', 'Wismar'],
  ['施特拉尔松德', 'Stralsund'],
  ['白露里治奥', 'Civita di Bagnoregio'],
  ['沃尔泰拉', 'Volterra'],
  ['莱切', 'Lecce'],
  ['曼托瓦', 'Mantua', 'Mantova'],
  ['拉文纳', 'Ravenna'],
  ['乌尔比诺', 'Urbino'],
  ['费拉拉', 'Ferrara'],
  ['阿斯科利皮切诺', 'Ascoli Piceno'],
  ['斯波莱托', 'Spoleto'],
  ['马泰拉', 'Matera'],
  ['龙达', 'Ronda'],
  ['昆卡', 'Cuenca'],
  ['阿维拉', 'Avila'],
  ['卡塞雷斯', 'Caceres', 'Cáceres'],
  ['桑蒂利亚纳', 'Santillana'],
  ['吉马良斯', 'Guimaraes', 'Guimarães'],
  ['埃武拉', 'Evora', 'Évora'],
  ['奥比杜什', 'Obidos', 'Óbidos'],
  ['布拉加', 'Braga'],
  ['蒙桑图', 'Monsanto'],
  ['梅尔克', 'Melk'],
  ['杜伦斯泰因', '杜恩施泰因', 'Dürnstein'],
  ['格拉茨', 'Graz'],
  ['因斯布鲁克', 'Innsbruck'],
  ['哈尔', 'Hall in Tirol'],
  ['巴德伊舍', 'Bad Ischl'],
  ['圣加仑', 'St. Gallen'],
  ['图恩', 'Thun'],
  ['格吕耶尔', 'Gruyeres', 'Gruyères'],
  ['贝林佐纳', 'Bellinzona'],
  ['锡永', 'Sion'],
  ['库尔', 'Chur'],
  ['阿彭策尔', 'Appenzell'],
  ['穆尔滕', 'Murten'],
  ['泰尔奇', 'Telc', 'Telč'],
  ['库特纳霍拉', 'Kutna Hora', 'Kutná Hora'],
  ['克鲁姆洛夫', 'Krumlov'],
  ['班斯卡什佳夫尼察', '班斯卡-什佳夫尼察', 'Banska Stiavnica'],
  ['莱沃恰', 'Levoca', 'Levoča'],
  ['斯皮什', 'Spis', 'Spiš'],
  ['杰尔', 'Gyor', 'Győr'],
  ['埃格尔', 'Eger'],
  ['圣安德烈', 'Szentendre'],
  ['埃斯泰尔戈姆', 'Esztergom'],
  ['托卡伊', 'Tokaj'],
  ['皮兰', 'Piran'],
  ['罗维尼', 'Rovinj'],
  ['普拉', 'Pula'],
  ['特罗吉尔', 'Trogir'],
  ['科尔丘拉', 'Korcula', 'Korčula'],
  ['莫斯塔尔', 'Mostar'],
  ['佩拉斯特', 'Perast'],
  ['奥赫里德', 'Ohrid'],
  ['普罗夫迪夫', 'Plovdiv'],
  ['大特尔诺沃', 'Veliko Tarnovo'],
  ['锡比乌', 'Sibiu'],
  ['锡吉什瓦拉', 'Sighisoara', 'Sighișoara'],
  ['培拉特', 'Berat'],
  ['吉诺卡斯特', 'Gjirokaster', 'Gjirokastër'],
  ['纳夫普利翁', 'Nafplio'],
  ['莫奈姆瓦夏', 'Monemvasia'],
  ['梅黛奥拉', 'Meteora'],
  ['哈尼亚', 'Chania'],
  ['罗德岛', 'Rhodes'],
  ['林多斯', 'Lindos'],
  ['雷西姆诺', 'Rethymno'],
  ['维斯比', 'Visby'],
  ['锡格蒂纳', 'Sigtuna'],
  ['于斯塔德', 'Ystad'],
  ['勒罗斯', 'Roros', 'Røros'],
  ['波尔沃', 'Porvoo'],
  ['图尔库', 'Turku'],
  ['劳马', 'Rauma']
];

const results = [];

checkList.forEach(keywords => {
  const matches = attractions.filter(a => {
    return keywords.some(kw => 
      (a.name && a.name.includes(kw)) || 
      (a.englishName && a.englishName.includes(kw)) ||
      (a.slug && a.slug.includes(kw.toLowerCase()))
    );
  });
  
  if (matches.length > 1) {
    // Check if they are actually the same place (same country/city usually, or very similar name)
    results.push({
      keywords,
      matches: matches.map(m => ({ name: m.name, slug: m.slug, country: m.country, city: m.city }))
    });
  }
});

console.log(JSON.stringify(results, null, 2));
