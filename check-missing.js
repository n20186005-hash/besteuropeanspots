const fs = require('fs');
const list = `德国莱茵施泰因城堡・Rheinstein Castle・德国・莱茵兰
沃蒂夫教堂・Votivkirche・奥地利・维也纳
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
派尔努老城・Pärnu・爱沙尼亚・派尔努`;

const enNames = list.split('\n').filter(l=>l.trim()).map(l=>l.split('・')[1]?.trim().toLowerCase());
const attrs = JSON.parse(fs.readFileSync('src/data/attractions.json','utf8'));
const missing = enNames.filter(en => !attrs.some(a => a.englishName && a.englishName.toLowerCase() === en));
console.log('Missing in JSON:', missing);