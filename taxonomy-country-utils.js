const { pinyin } = require('pinyin-pro');

const STANDARD_TYPES = [
  '城镇与村落',
  '建筑与地标',
  '宗教遗产',
  '历史遗迹与考古',
  '文化艺术与休闲',
  '自然景观',
];

const GLOBAL_COUNTRIES_BY_CONTINENT = {
  亚洲: ['中国', '日本', '韩国', '朝鲜', '蒙古', '越南', '老挝', '柬埔寨', '泰国', '缅甸', '马来西亚', '新加坡', '印尼', '文莱', '菲律宾', '东帝汶', '尼泊尔', '不丹', '孟加拉国', '印度', '巴基斯坦', '斯里兰卡', '马尔代夫', '哈萨克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '乌兹别克斯坦', '土库曼斯坦', '阿富汗', '伊拉克', '伊朗', '叙利亚', '约旦', '黎巴嫩', '以色列', '巴勒斯坦', '沙特阿拉伯', '巴林', '卡塔尔', '科威特', '阿联酋', '阿曼', '也门', '格鲁吉亚', '亚美尼亚', '阿塞拜疆', '土耳其', '塞浦路斯'],
  欧洲: ['法国', '比利时', '卢森堡', '德国', '意大利', '西班牙', '奥地利', '瑞士', '捷克', '斯洛伐克', '匈牙利', '斯洛文尼亚', '克罗地亚', '黑山', '希腊', '瑞典', '挪威', '丹麦', '芬兰', '罗马尼亚', '塞尔维亚', '北马其顿', '立陶宛', '爱沙尼亚', '葡萄牙', '波黑', '英国', '荷兰', '阿尔巴尼亚', '拉脱维亚', '马耳他', '保加利亚', '波兰', '俄罗斯', '白俄罗斯', '乌克兰', '摩尔多瓦', '冰岛', '爱尔兰', '安道尔', '摩纳哥', '列支敦士登', '圣马力诺', '梵蒂冈'],
  美洲: ['美国', '加拿大', '墨西哥', '危地马拉', '伯利兹', '萨尔瓦多', '洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '巴哈马', '古巴', '牙买加', '海地', '多米尼加', '安提瓜和巴布达', '圣基茨和尼维斯', '多米尼克', '圣卢西亚', '圣文森特和格林纳丁斯', '格林纳达', '巴巴多斯', '特立尼达和多巴哥', '哥伦比亚', '委内瑞拉', '圭亚那', '苏里南', '厄瓜多尔', '秘鲁', '玻利维亚', '巴西', '智利', '阿根廷', '乌拉圭', '巴拉圭'],
  非洲: ['埃及', '苏丹', '南苏丹', '利比亚', '突尼斯', '阿尔及利亚', '摩洛哥', '埃塞俄比亚', '厄立特里亚', '索马里', '吉布提', '肯尼亚', '坦桑尼亚', '乌干达', '卢旺达', '布隆迪', '塞舌尔', '毛里求斯', '安哥拉', '赞比亚', '马拉维', '莫桑比克', '纳米比亚', '博茨瓦纳', '津巴布韦', '南非', '斯威士兰', '莱索托', '马达加斯加', '科摩罗', '佛得角', '塞内加尔', '冈比亚', '马里', '布基纳法索', '几内亚', '几内亚比绍', '塞拉利昂', '利比里亚', '科特迪瓦', '加纳', '多哥', '贝宁', '尼日尔', '尼日利亚', '喀麦隆', '赤道几内亚', '乍得', '中非', '圣多美和普林西比', '加蓬', '刚果（布）', '刚果（金）'],
  大洋洲: ['澳大利亚', '新西兰', '巴布亚新几内亚', '所罗门群岛', '瓦努阿图', '密克罗尼西亚', '马绍尔群岛', '帕劳', '瑙鲁', '基里巴斯', '图瓦卢', '萨摩亚', '斐济', '汤加', '库克群岛', '纽埃'],
};

const STANDARD_COUNTRY_SET = new Set(Object.values(GLOBAL_COUNTRIES_BY_CONTINENT).flat());

const COUNTRY_TRANSLATIONS = {
  France: '法国',
  Germany: '德国',
  USA: '美国',
  'United States': '美国',
  America: '美国',
  Italy: '意大利',
  Spain: '西班牙',
  Portugal: '葡萄牙',
  Belgium: '比利时',
  Netherlands: '荷兰',
  Holland: '荷兰',
  Luxembourg: '卢森堡',
  Switzerland: '瑞士',
  Austria: '奥地利',
  Greece: '希腊',
  Turkey: '土耳其',
  Cyprus: '塞浦路斯',
  Romania: '罗马尼亚',
  Serbia: '塞尔维亚',
  Bosnia: '波黑',
  'Bosnia and Herzegovina': '波黑',
  Croatia: '克罗地亚',
  Montenegro: '黑山',
  Slovenia: '斯洛文尼亚',
  'North Macedonia': '北马其顿',
  Macedonia: '北马其顿',
  Albania: '阿尔巴尼亚',
  Estonia: '爱沙尼亚',
  Latvia: '拉脱维亚',
  Lithuania: '立陶宛',
  Finland: '芬兰',
  Sweden: '瑞典',
  Norway: '挪威',
  Denmark: '丹麦',
  Ireland: '爱尔兰',
  Iceland: '冰岛',
  Poland: '波兰',
  Czechia: '捷克',
  'Czech Republic': '捷克',
  Slovakia: '斯洛伐克',
  Hungary: '匈牙利',
  Bulgaria: '保加利亚',
  Malta: '马耳他',
  Andorra: '安道尔',
  Monaco: '摩纳哥',
  Liechtenstein: '列支敦士登',
  'San Marino': '圣马力诺',
  Vatican: '梵蒂冈',
  Belarus: '白俄罗斯',
  Ukraine: '乌克兰',
  Moldova: '摩尔多瓦',
  Russia: '俄罗斯',
  Georgia: '格鲁吉亚',
  Armenia: '亚美尼亚',
  Azerbaijan: '阿塞拜疆',
  Canada: '加拿大',
  Mexico: '墨西哥',
};

const COUNTRY_DISPLAY_ALIASES = [
  [/波斯尼亚和黑塞哥维那（波黑）/g, '波黑'],
  [/波黑（波斯尼亚和黑塞哥维那）/g, '波黑'],
  [/波斯尼亚和黑塞哥维那/g, '波黑'],
  [/塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）/g, '塞浦路斯与土耳其'],
  [/塞浦路斯和土耳其/g, '塞浦路斯与土耳其'],
  [/塞尔维亚\s*[&＆]\s*罗马尼亚/g, '塞尔维亚与罗马尼亚'],
  [/西班牙\s*[，,]\s*葡萄牙/g, '西班牙与葡萄牙'],
  [/比利时\s*[\/／]\s*荷兰/g, '比利时与荷兰'],
  [/爱沙尼亚\s*[\/／]\s*拉脱维亚/g, '爱沙尼亚与拉脱维亚'],
  [/威尼托/g, '意大利'],
  [/伯尔尼州/g, '瑞士'],
  [/加利福尼亚/g, '美国'],
  [/科索沃/g, '塞尔维亚'],
  [/Kosovo/g, '塞尔维亚'],
];

const MULTI_COUNTRY_DISPLAY_MAP = {
  '塞浦路斯与土耳其': ['塞浦路斯', '土耳其'],
  '塞尔维亚与罗马尼亚': ['塞尔维亚', '罗马尼亚'],
  '西班牙与葡萄牙': ['西班牙', '葡萄牙'],
  '比利时与荷兰': ['比利时', '荷兰'],
  '爱沙尼亚与拉脱维亚': ['爱沙尼亚', '拉脱维亚'],
  '爱沙尼亚、拉脱维亚、瑞典与芬兰': ['爱沙尼亚', '拉脱维亚', '瑞典', '芬兰'],
};

function getCountrySlug(country) {
  if (country === '英国') return 'uk';
  if (country === '美国') return 'usa';
  if (country === '波黑') return 'bosnia-and-herzegovina';
  if (country === '塞浦路斯') return 'cyprus';
  return pinyin(country, { toneType: 'none', type: 'array' }).join('').toLowerCase();
}

function normalizeCountryDisplay(value = '') {
  let output = String(value || '').trim();
  if (!output) return '';
  output = COUNTRY_TRANSLATIONS[output] || output;
  for (const [pattern, replacement] of COUNTRY_DISPLAY_ALIASES) {
    output = output.replace(pattern, replacement);
  }
  if (output === '北欧及波罗的海地区（跨爱沙尼亚、拉脱维亚、瑞典、芬兰等多国）') {
    return '爱沙尼亚、拉脱维亚、瑞典与芬兰';
  }
  return output.trim();
}

function splitCountries(displayCountry = '', fallbackText = '') {
  const normalizedDisplay = normalizeCountryDisplay(displayCountry);
  if (MULTI_COUNTRY_DISPLAY_MAP[normalizedDisplay]) {
    return MULTI_COUNTRY_DISPLAY_MAP[normalizedDisplay];
  }
  if (STANDARD_COUNTRY_SET.has(normalizedDisplay)) {
    return [normalizedDisplay];
  }

  const mergedText = `${normalizedDisplay} ${fallbackText || ''}`;
  if (/爱沙尼亚/.test(mergedText) && /拉脱维亚/.test(mergedText) && /瑞典/.test(mergedText) && /芬兰/.test(mergedText)) {
    return ['爱沙尼亚', '拉脱维亚', '瑞典', '芬兰'];
  }

  const results = [];
  for (const country of STANDARD_COUNTRY_SET) {
    if (mergedText.includes(country)) {
      results.push(country);
    }
  }
  return Array.from(new Set(results));
}

function normalizeCountryPayload({ country = '', city = '', description = '', address = '', transport = '' }) {
  const displayCountry = normalizeCountryDisplay(country);
  const countries = splitCountries(displayCountry, `${city} ${description} ${address} ${transport}`);
  const primaryCountry = countries[0] || (STANDARD_COUNTRY_SET.has(displayCountry) ? displayCountry : displayCountry);

  return {
    country: displayCountry || primaryCountry,
    countries: countries.length > 0 ? countries : primaryCountry ? [primaryCountry] : [],
    region: countries[0] || primaryCountry || '',
    countrySlug: countries[0] ? getCountrySlug(countries[0]) : '',
  };
}

function keywordMatch(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function normalizeType(value = '') {
  const raw = String(value || '').trim();
  const text = raw.toLowerCase();

  if (
    keywordMatch(text, ['教堂', '大教堂', '修道院', '神庙', '清真寺', '圣殿', '圣地', '宗教', 'abbey', 'cathedral', 'monastery', 'church', 'temple', 'mosque', 'basilica'])
  ) {
    return '宗教遗产';
  }

  if (
    keywordMatch(text, ['遗址', '遗迹', '考古', '废墟', '纪念碑', '古墓', '史前', '石圈', '巨石', '岩画', '古战场', 'ruins', 'archae', 'monument'])
  ) {
    return '历史遗迹与考古';
  }

  if (
    keywordMatch(text, ['瀑布', '湖', '山', '峡谷', '洞', '溶洞', '海湾', '海滩', '海岸', '岛', '冰川', '火山', '国家公园', '自然', '森林', '河谷', '湿地', '温泉湖', 'cave', 'lake', 'waterfall', 'island', 'coast', 'beach', 'mountain', 'nature', 'park'])
  ) {
    return '自然景观';
  }

  if (
    keywordMatch(text, ['城堡', '要塞', '宫殿', '桥', '塔', '堡垒', '城墙', '灯塔', '门楼', '港口', 'fortress', 'castle', 'palace', 'bridge', 'tower', 'fort', 'harbour', 'harbor', 'lighthouse'])
  ) {
    return '建筑与地标';
  }

  if (
    keywordMatch(text, ['古城', '老城', '小镇', '古镇', '村', '村落', '城镇', '渔村', '镇', 'old town', 'town', 'village'])
  ) {
    return '城镇与村落';
  }

  if (
    keywordMatch(text, ['博物馆', '工业', '公园', '温泉浴场', '浴场', '艺术', '文化', '休闲', '剧院', '花园', '酒庄', 'museum', 'industrial', 'park', 'spa', 'art', 'gallery', 'garden'])
  ) {
    return '文化艺术与休闲';
  }

  return '文化艺术与休闲';
}

function normalizeAttractionRecord(record) {
  const originalType = record.raw_type || record.type || '';
  const normalizedCountry = normalizeCountryPayload(record);
  const normalizedType = normalizeType(originalType);

  return {
    ...record,
    country: normalizedCountry.country,
    countries: normalizedCountry.countries,
    region: normalizedCountry.region,
    countrySlug: normalizedCountry.countrySlug || record.countrySlug || '',
    raw_type: originalType,
    type: normalizedType,
  };
}

module.exports = {
  STANDARD_TYPES,
  GLOBAL_COUNTRIES_BY_CONTINENT,
  STANDARD_COUNTRY_SET,
  getCountrySlug,
  normalizeCountryDisplay,
  normalizeCountryPayload,
  normalizeType,
  normalizeAttractionRecord,
};
