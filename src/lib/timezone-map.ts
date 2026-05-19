export const countryToTimezone: Record<string, string> = {
  // Western Europe (WET / UTC+0)
  '英国': 'Europe/London',
  '爱尔兰': 'Europe/Dublin',
  '葡萄牙': 'Europe/Lisbon',
  '冰岛': 'Atlantic/Reykjavik',
  
  // Eastern Europe (EET / UTC+2)
  '希腊': 'Europe/Athens',
  '芬兰': 'Europe/Helsinki',
  '罗马尼亚': 'Europe/Bucharest',
  '保加利亚': 'Europe/Sofia',
  '塞浦路斯': 'Asia/Nicosia',
  '爱沙尼亚': 'Europe/Tallinn',
  '拉脱维亚': 'Europe/Riga',
  '立陶宛': 'Europe/Vilnius',
  '摩尔多瓦': 'Europe/Chisinau',
  '乌克兰': 'Europe/Kiev',
  '白俄罗斯': 'Europe/Minsk',
  
  // Russia (Moscow Time / UTC+3)
  '俄罗斯': 'Europe/Moscow',
  
  // Default to Central Europe (CET / UTC+1)
  // 覆盖: 法国, 德国, 意大利, 西班牙, 瑞士, 奥地利, 荷兰, 比利时, 捷克, 匈牙利, 波兰, 瑞典, 挪威, 丹麦等
};

// Open-Meteo 在纯中文环境下搜索经常失败，这里加一个国家英文映射表用于回退搜索
export const countryToEnglishMap: Record<string, string> = {
  '丹麦': 'Denmark',
  '芬兰': 'Finland',
  '冰岛': 'Iceland',
  '挪威': 'Norway',
  '瑞典': 'Sweden',
  '爱沙尼亚': 'Estonia',
  '拉脱维亚': 'Latvia',
  '立陶宛': 'Lithuania',
  '比利时': 'Belgium',
  '法国': 'France',
  '爱尔兰': 'Ireland',
  '卢森堡': 'Luxembourg',
  '摩纳哥': 'Monaco',
  '荷兰': 'Netherlands',
  '英国': 'United Kingdom',
  '白俄罗斯': 'Belarus',
  '俄罗斯': 'Russia',
  '乌克兰': 'Ukraine',
  '摩尔多瓦': 'Moldova',
  '奥地利': 'Austria',
  '捷克': 'Czech Republic',
  '德国': 'Germany',
  '匈牙利': 'Hungary',
  '波兰': 'Poland',
  '斯洛伐克': 'Slovakia',
  '瑞士': 'Switzerland',
  '列支敦士登': 'Liechtenstein',
  '阿尔巴尼亚': 'Albania',
  '安道尔': 'Andorra',
  '波斯尼亚和黑塞哥维那': 'Bosnia and Herzegovina',
  '波黑': 'Bosnia and Herzegovina',
  '保加利亚': 'Bulgaria',
  '克罗地亚': 'Croatia',
  '塞浦路斯': 'Cyprus',
  '希腊': 'Greece',
  '意大利': 'Italy',
  '马耳他': 'Malta',
  '黑山': 'Montenegro',
  '北马其顿': 'North Macedonia',
  '葡萄牙': 'Portugal',
  '圣马力诺': 'San Marino',
  '塞尔维亚': 'Serbia',
  '斯洛文尼亚': 'Slovenia',
  '西班牙': 'Spain',
  '梵蒂冈': 'Vatican City',
  '罗马尼亚': 'Romania',
  '科索沃': 'Kosovo'
};

export function getTimezoneByCountry(country: string): string {
  if (!country) return 'Europe/Paris';
  
  for (const [key, tz] of Object.entries(countryToTimezone)) {
    if (country.includes(key)) {
      return tz;
    }
  }
  
  return 'Europe/Paris'; // 默认中欧时间
}
