const fs = require('fs');

const text = `普罗万中世纪古城・Provins・法国・普罗万 
 特鲁瓦老城・Troyes Old Town・法国・特鲁瓦 
 阿尔比主教城・Episcopal City of Albi・法国・阿尔比 
 罗卡马杜尔宗教圣地・Rocamadour・法国・罗卡马杜尔 
 孔克修道院与小镇・Conques・法国・孔克 
 勒皮圣母大教堂・Le Puy Cathedral・法国・勒皮 
 迪南中世纪古城・Dinan・法国・迪南 
 瓦讷老城・Vannes Old Town・法国・瓦讷 
 凯斯贝格小镇・Kaysersberg・法国・凯斯贝格 
 里屈埃维・Riquewihr・法国・里屈埃维 
 萨尔拉拉卡内达・Sarlat-la-Canéda・法国・萨尔拉拉卡内达 
 戈尔代（石头城）・Gordes・法国・戈尔代 
 鲁西永（红土城）・Roussillon・法国・鲁西永 
 佩永悬崖小镇・Peillon・法国・佩永 
 科尔德叙谢勒・Cordes-sur-Ciel・法国・科尔德 
 迪南（铜管乐器之乡）・Dinant・比利时・迪南 
 迪尔比（世界最小城市）・Durbuy・比利时・迪尔比 
 梅赫伦老城・Mechelen Old Town・比利时・梅赫伦 
 鲁汶大学城与市政厅・Leuven・比利时・鲁汶 
 图尔奈大教堂・Tournai Cathedral・比利时・图尔奈 
 哈勒姆老城・Haarlem・荷兰・哈勒姆 
 代尔夫特老城・Delft・荷兰・代尔夫特 
 羊角村・Giethoorn・荷兰・斯滕韦克尔兰 
 莱顿大学城・Leiden・荷兰・莱顿 
 豪达奶酪小镇・Gouda・荷兰・豪达 
 法尔肯堡废墟城堡・Valkenburg Castle・荷兰・法尔肯堡 
 维安登城堡・Vianden Castle・卢森堡・维安登 
 埃希特纳赫修道院・Echternach Abbey・卢森堡・埃希特纳赫 
 博福尔城堡遗址・Beaufort Castles・卢森堡・博福尔 
 埃施叙尔叙尔・Esch-sur-Sûre・卢森堡・埃施叙尔叙尔 
 奎德林堡老城・Quedlinburg・德国・奎德林堡 
 维斯马汉萨同盟老城・Wismar・德国・维斯马 
 施特拉尔松德・Stralsund・德国・施特拉尔松德 
 班贝格老城・Bamberg・德国・班贝格 
 丁克尔斯比尔・Dinkelsbühl・德国・丁克尔斯比尔 
 讷德林根（陨石坑小镇）・Nördlingen・德国・讷德林根 
 什未林城堡・Schwerin Castle・德国・什未林 
 特里尔古罗马遗址・Trier Roman Monuments・德国・特里尔 
 戈斯拉尔老城・Goslar・德国・戈斯拉尔 
 策勒木结构建筑群・Celle・德国・策勒 
 蒙绍半木结构小镇・Monschau・德国・蒙绍 
 科赫姆帝国城堡・Cochem Castle・德国・科赫姆 
 梅尔斯堡旧城・Meersburg・德国・梅尔斯堡 
 图宾根大学城・Tübingen・德国・图宾根 
 维尔茨堡主教宫・Würzburg Residence・德国・维尔茨堡 
 马泰拉石窟民居・Sassi di Matera・意大利・马泰拉 
 阿尔贝罗贝洛圆顶石屋・Alberobello・意大利・阿尔贝罗贝洛 
 莱切（巴洛克之城）・Lecce・意大利・莱切 
 卢卡古城墙・Lucca Old Town・意大利・卢卡 
 圣吉米尼亚诺百塔之城・San Gimignano・意大利・圣吉米尼亚诺 
 沃尔泰拉伊特鲁里亚遗址・Volterra・意大利・沃尔泰拉 
 白露里治奥（天空之城）・Civita di Bagnoregio・意大利・维泰博 
 奥尔维耶托大教堂・Orvieto Cathedral・意大利・奥尔维耶托 
 斯波莱托古城・Spoleto・意大利・斯波莱托 
 托迪中世纪古城・Todi・意大利・托迪 
 曼托瓦老城・Mantua・意大利・曼托瓦 
 费拉拉文艺复兴城市・Ferrara・意大利・费拉拉 
 拉文纳拜占庭马赛克・Ravenna・意大利・拉文纳 
 乌尔比诺历史中心・Urbino・意大利・乌尔比诺 
 阿斯科利皮切诺・Ascoli Piceno・意大利・阿斯科利皮切诺 
 龙达悬崖小镇・Ronda・西班牙・龙达 
 昆卡悬屋・Cuenca・西班牙・昆卡 
 塞哥维亚罗马水道桥・Segovia・西班牙・塞哥维亚 
 阿维拉古城墙・Ávila・西班牙・阿维拉 
 卡塞雷斯老城・Cáceres・西班牙・卡塞雷斯 
 梅里达罗马遗址・Mérida・西班牙・梅里达 
 萨拉曼卡大学城・Salamanca・西班牙・萨拉曼卡 
 桑蒂利亚纳代尔马尔・Santillana del Mar・西班牙・坎塔布里亚 
 阿尔特亚白屋小镇・Altea・西班牙・阿利坎特 
 埃武拉人骨教堂与古城・Évora・葡萄牙・埃武拉 
 奥比杜什婚礼之城・Óbidos・葡萄牙・奥比杜什 
 吉马良斯历史中心・Guimarães・葡萄牙・吉马良斯 
 布拉加仁慈耶稣朝圣所・Bom Jesus do Monte・葡萄牙・布拉加 
 科英布拉大学城・Coimbra・葡萄牙・科英布拉 
 蒙桑图（巨石小镇）・Monsanto・葡萄牙・伊达尼亚-阿诺瓦 
 梅尔克修道院・Melk Abbey・奥地利・梅尔克 
 杜伦斯泰因・Dürnstein・奥地利・杜伦斯泰因 
 格拉茨老城・Graz Old Town・奥地利・格拉茨 
 因斯布鲁克老城・Innsbruck・奥地利・因斯布鲁克 
 蒂罗尔州哈尔・Hall in Tirol・奥地利・因斯布鲁克郊区 
 巴德伊舍（皇家温泉小镇）・Bad Ischl・奥地利・巴德伊舍 
 圣加仑修道院图书馆・Abbey of Saint Gall・瑞士・圣加仑 
 图恩城堡与老城・Thun Castle・瑞士・图恩 
 弗里堡老城・Fribourg・瑞士・弗里堡 
 格吕耶尔中世纪小镇・Gruyères・瑞士・格吕耶尔 
 贝林佐纳三城堡・Castles of Bellinzona・瑞士・贝林佐纳 
 锡永瓦莱州首府・Sion・瑞士・锡永 
 库尔（瑞士最古老城市）・Chur・瑞士・库尔 
 阿彭策尔传统村落・Appenzell・瑞士・阿彭策尔 
 穆尔滕（环湖古城墙）・Murten (Morat)・瑞士・穆尔滕 
 泰尔奇水上城堡・Telč・捷克・泰尔奇 
 库特纳霍拉（人骨教堂）・Kutná Hora・捷克・库特纳霍拉 
 卡罗维发利温泉镇・Karlovy Vary・捷克・卡罗维发利 
 克鲁姆洛夫（CK小镇）・Český Krumlov・捷克・克鲁姆洛夫 
 特伦钦城堡・Trenčín Castle・斯洛伐克・特伦钦 
 特尔纳瓦（斯洛伐克的小罗马）・Trnava・斯洛伐克・特尔纳瓦 
 班斯卡什佳夫尼察・Banská Štiavnica・斯洛伐克・班斯卡什佳夫尼察 
 斯皮什城堡・Spiš Castle・斯洛伐克・斯皮什斯凯波赫拉杰 
 莱沃恰老城・Levoča・斯洛伐克・莱沃恰 
 杰尔巴洛克老城・Győr・匈牙利・杰尔 
 埃格尔城堡与公牛血产区・Eger・匈牙利・埃格尔 
 佩奇早期基督教陵墓・Pécs・匈牙利・佩奇 
 圣安德烈（艺术小镇）・Szentendre・匈牙利・圣安德烈 
 埃斯泰尔戈姆大教堂・Esztergom Basilica・匈牙利・埃斯泰尔戈姆 
 托卡伊葡萄酒产区・Tokaj・匈牙利・托卡伊 
 皮兰盐田与老城・Piran・斯洛文尼亚・皮兰 
 罗维尼海滨古城・Rovinj・克罗地亚・罗维尼 
 普拉竞技场・Pula Arena・克罗地亚・普拉 
 特罗吉尔历史中心・Trogir・克罗地亚・特罗吉尔 
 科尔丘拉岛（马可波罗故乡）・Korčula・克罗地亚・科尔丘拉 
 赫瓦尔镇・Hvar Town・克罗地亚・赫瓦尔 
 佩拉斯特（峡湾小镇）・Perast・黑山・佩拉斯特 
 莫斯塔尔老桥・Stari Most・波黑・莫斯塔尔 
 亚伊采瀑布与城堡・Jajce・波黑・亚伊采 
 布拉加伊特基亚修道院・Blagaj Tekke・波黑・布拉加伊 
 奥赫里德湖与老城・Ohrid・北马其顿・奥赫里德 
 比托拉老集市・Bitola・北马其顿・比托拉 
 普里兹伦奥斯曼古城・Prizren・科索沃（巴尔干地区）・普里兹伦 
 培拉特（千窗之城）・Berat・阿尔巴尼亚・培拉特 
 吉诺卡斯特（石头城）・Gjirokastër・阿尔巴尼亚・吉诺卡斯特 
 纳夫普利翁（希腊故都）・Nafplio・希腊・纳夫普利翁 
 莫奈姆瓦夏（海上岩石城）・Monemvasia・希腊・莫奈姆瓦夏 
 米斯特拉斯拜占庭遗址・Mystras・希腊・斯巴达附近 
 德尔斐阿波罗神庙・Delphi・希腊・德尔斐 
 梅黛奥拉（天空之城修道院）・Meteora・希腊・卡兰巴卡 
 哈尼亚威尼斯港・Chania・希腊・克里特岛 
 罗德岛骑士街・Rhodes Old Town・希腊・罗德岛 
 林多斯卫城・Lindos・希腊・罗德岛 
 锡罗斯岛埃尔穆波利・Ermoupoli・希腊・锡罗斯岛 
 雷西姆诺老城・Rethymno・希腊・克里特岛 
 西格蒂纳（瑞典最古老城镇）・Sigtuna・瑞典・西格蒂纳 
 维斯比中世纪城墙・Visby・瑞典・哥特兰岛 
 于斯塔德半木结构小镇・Ystad・瑞典・于斯塔德 
 乌普萨拉大教堂・Uppsala Cathedral・瑞典・乌普萨拉 
 勒罗斯采矿镇・Røros・挪威・勒罗斯 
 特罗姆瑟北极大教堂・Tromsø・挪威・特罗姆瑟 
 波尔沃红色木屋区・Porvoo・芬兰・波尔沃 
 图尔库城堡・Turku Castle・芬兰・图尔库 
 劳马老城・Old Rauma・芬兰・劳马 
 里伯（丹麦最古老小镇）・Ribe・丹麦・里伯`;

const attractionsFile = 'src/data/attractions.json';
let attractions = JSON.parse(fs.readFileSync(attractionsFile, 'utf8'));

const lines = text.split('\n').filter(line => line.trim() !== '');

let addedCount = 0;

lines.forEach(line => {
  const parts = line.split('・').map(s => s.trim());
  if (parts.length >= 3) {
    const [name, englishName, country] = parts;
    let city = parts[3] || parts[0]; 

    // 生成 slug：转小写，去除非字母数字，替换空格为中划线
    const slug = englishName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    // 检查是否已存在
    const exists = attractions.some(a => a.slug === slug || a.name === name);
    
    if (!exists) {
      attractions.push({
        name,
        englishName,
        country,
        city,
        slug,
        description: "",
        address: "",
        transport: "",
        region: country,
        type: "古城",
        category: ["encyclopedia"]
      });
      addedCount++;
    }
  }
});

fs.writeFileSync(attractionsFile, JSON.stringify(attractions, null, 2));
console.log(`Successfully added ${addedCount} missing attractions.`);
