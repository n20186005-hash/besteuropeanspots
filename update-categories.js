const fs = require('fs');
const path = require('path');

const inputList = `
里昂历史中心・Historic Centre of Lyon・法国・里昂
加尔桥・Pont du Gard・法国・尼姆
沙特尔大教堂・Chartres Cathedral・法国・沙特尔
亚眠大教堂・Amiens Cathedral・法国・亚眠
博韦大教堂・Beauvais Cathedral・法国・博韦
勒芒老城・Old Town of Le Mans・法国・勒芒
布尔日大教堂・Bourges Cathedral・法国・布尔日
旺多姆广场・Place Vendôme・法国・旺多姆
梅茨老城・Metz Old Town・法国・梅茨
圣萨万修道院・Abbey Church of Saint-Savin・法国・圣萨万
那慕尔圣母大教堂・Notre-Dame de Namur・比利时・那慕尔
林堡圣母教堂・Basilica of Our Lady・比利时・通厄伦
布伦古堡・Bouillon Castle・比利时・布伦
鲁尔蒙德老城・Roermond Old Town・荷兰・鲁尔蒙德
聚特芬古城・Zutphen・荷兰・聚特芬
阿尔隆古罗马遗址・Arlon Roman Ruins・比利时・阿尔隆
克莱沃城堡・Clervaux Castle・卢森堡・克莱沃
施托尔贝格城堡・Stolberg Castle・德国・施托尔贝格
科布伦茨埃伦布赖特施泰因要塞・Ehrenbreitstein Fortress・德国・科布伦茨
瑙姆堡大教堂・Naumburg Cathedral・德国・瑙姆堡
迈宁根老城・Meiningen Old Town・德国・迈宁根
施托尔岑费尔斯城堡・Stolzenfels Castle・德国・科布伦茨
安贝格老城・Amberg・德国・安贝格
多瑙沃特古城・Donauwörth・德国・多瑙沃特
巴特温普芬・Bad Wimpfen・德国・巴特温普芬
哈默尔恩老城・Hameln・德国・哈默尔恩
施塔德老城・Stade・德国・施塔德
魏玛老城・Weimar Old Town・德国・魏玛
埃尔福特老城・Erfurt Old Town・德国・埃尔福特
巴德哈尔茨堡・Bad Harzburg・德国・巴德哈尔茨堡
卢尼古罗马遗址・Luni Roman Ruins・意大利・卢尼
古比奥古城・Gubbio・意大利・古比奥
佩鲁贾老城・Perugia・意大利・佩鲁贾
阿梅利亚古城・Amelia・意大利・阿梅利亚
纳尔尼古城・Narni・意大利・纳尔尼
费尔莫古城・Fermo・意大利・费尔莫
坎波巴索老城・Campobasso・意大利・坎波巴索
韦纳夫罗古城・Venafro・意大利・韦纳夫罗
阿切伦扎古城・Acerenza・意大利・阿切伦扎
罗萨诺大教堂・Rossano Cathedral・意大利・罗萨诺
奥特朗托老城・Otranto・意大利・奥特朗托
加里波利老城・Gallipoli・意大利・加里波利
阿斯托加主教宫・Astorga Episcopal Palace・西班牙・阿斯托加
萨莫拉大教堂・Zamora Cathedral・西班牙・萨莫拉
莱昂老城・León Old Town・西班牙・莱昂
帕伦西亚老城・Palencia・西班牙・帕伦西亚
哈恩古城・Jaén・西班牙・哈恩
乌韦达古城・Úbeda・西班牙・乌韦达
巴埃萨古城・Baeza・西班牙・巴埃萨
塞维利亚黄金塔・Torre del Oro・西班牙・塞维利亚
托马尔骑士团修道院・Convent of Christ・葡萄牙・托马尔
巴塔利亚修道院・Batalha Monastery・葡萄牙・巴塔利亚
马尔旺城堡・Marvão Castle・葡萄牙・马尔旺
蓬蒂维城堡・Pontevedra Castle・葡萄牙・蓬蒂维
格蒙登湖城・Gmunden・奥地利・格蒙登
克雷姆斯老城・Krems・奥地利・克雷姆斯
施泰因老城・Stein an der Donau・奥地利・施泰因
沃蒂夫教堂・Votivkirche・奥地利・维也纳
莱茵施泰因城堡・Rheinstein Castle・瑞士・巴特拉盖
阿尔卑纳城堡・Arbon Castle・瑞士・阿尔邦
拉珀斯维尔城堡・Rapperswil Castle・瑞士・拉珀斯维尔
布雷根茨老城・Bregenz・奥地利・布雷根茨
布尔诺老城・Brno・捷克・布尔诺
奥洛穆茨老城・Olomouc・捷克・奥洛穆茨
科希策老城・Košice・斯洛伐克・科希策
普雷绍夫老城・Prešov・斯洛伐克・普雷绍夫
肖普朗老城・Sopron・匈牙利・肖普朗
塞克什白堡老城・Székesfehérvár・匈牙利・塞克什白堡
维斯普雷姆老城・Veszprém・匈牙利・维斯普雷姆
考洛乔老城・Kalocsa・匈牙利・考洛乔
米什科尔茨老城・Miskolc・匈牙利・米什科尔茨
贝兹道城堡・Beckov Castle・斯洛伐克・贝兹道
里耶卡老城・Rijeka・克罗地亚・里耶卡
扎达尔老城・Zadar・克罗地亚・扎达尔
希贝尼克老城・Šibenik・克罗地亚・希贝尼克
察夫塔特・Cavtat・克罗地亚・察夫塔特
特雷比涅老城・Trebinje・波黑・特雷比涅
布德瓦老城・Budva Old Town・黑山・布德瓦
采蒂涅老城・Cetinje・黑山・采蒂涅
科拉欣・Kolašin・黑山・科拉欣
卡斯托里亚老城・Kastoria・希腊・卡斯托里亚
迈措翁・Metsovo・希腊・迈措翁
阿尔塔古城・Arta・希腊・阿尔塔
约阿尼纳老城・Ioannina・希腊・约阿尼纳
卡瓦拉老城・Kavala・希腊・卡瓦拉
克桑西古城・Xanthi・希腊・克桑西
林雪平老城・Linköping・瑞典・林雪平
韦斯特罗斯・Västerås・瑞典・韦斯特罗斯
奥勒松老城・Ålesund・挪威・奥勒松
斯塔万格老城・Stavanger・挪威・斯塔万格
里希拉赫蒂・Riihimäki・芬兰・里希拉赫蒂
坦佩雷老城・Tampere・芬兰・坦佩雷
布加勒斯特老城・Bucharest Old Town・罗马尼亚・布加勒斯特
克拉约瓦老城・Craiova・罗马尼亚・克拉约瓦
泽蒙老城・Zemun・塞尔维亚・贝尔格莱德
诺维萨德要塞・Petrovaradin Fortress・塞尔维亚・诺维萨德
斯科普里老城・Skopje・北马其顿・斯科普里
泰托沃老城・Tetovo・北马其顿・泰托沃
维尔纽斯老城・Vilnius Old Town・立陶宛・维尔纽斯
派尔努老城・Pärnu・爱沙尼亚・派尔努
`;

const enNames = inputList.split('\n')
  .filter(l => l.trim())
  .map(l => l.split('・')[1]?.trim()?.toLowerCase())
  .filter(Boolean);

const zhNames = inputList.split('\n')
  .filter(l => l.trim())
  .map(l => l.split('・')[0]?.trim())
  .filter(Boolean);

// 加上韦兹莱修道院
enNames.push('vézelay abbey', 'vezelay abbey');
zhNames.push('韦兹莱修道院');

const jsonFile = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

let matchCount = 0;

for (const attr of attractions) {
  // 初始化 category 如果没有
  if (!attr.category) {
    attr.category = [];
  }
  
  const matchEn = attr.englishName && enNames.includes(attr.englishName.toLowerCase());
  const matchZh = attr.name && zhNames.some(zh => attr.name.includes(zh) || zh.includes(attr.name));
  
  if (matchEn || matchZh) {
    if (!attr.category.includes('encyclopedia')) {
      attr.category.push('encyclopedia');
    }
    matchCount++;
  } else {
    // 不是百科，可能是游记或历史（暂时默认空或保留其他）
    // 为了防止以前的数据干扰，确保它不是 encyclopedia
    attr.category = attr.category.filter(c => c !== 'encyclopedia');
  }
}

fs.writeFileSync(jsonFile, JSON.stringify(attractions, null, 2), 'utf8');
console.log(`Matched and categorized ${matchCount} encyclopedia entries.`);
