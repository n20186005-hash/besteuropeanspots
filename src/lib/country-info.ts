export interface CountryPracticalInfo {
  currencyCode: string;
  currencyName: string;
  plugType: string[];
  voltage: string;
  tipping: {
    percentage: number;
    description: string;
  };
}

// 欧盟大部分国家的基础配置
const baseEU = {
  currencyCode: 'EUR',
  currencyName: '欧元',
  plugType: ['C', 'F'],
  voltage: '230V 50Hz',
  tipping: { percentage: 10, description: '服务费通常已包含，若服务优良可留下 5-10% 的小费或凑整。' }
};

export const countryInfoMap: Record<string, CountryPracticalInfo> = {
  '丹麦': { currencyCode: 'DKK', currencyName: '丹麦克朗', plugType: ['C', 'E', 'K'], voltage: '230V 50Hz', tipping: { percentage: 0, description: '服务费已包含在账单中，无需额外付小费，凑整即可。' } },
  '芬兰': { ...baseEU, tipping: { percentage: 0, description: '小费文化不流行，账单已含服务费。' } },
  '冰岛': { currencyCode: 'ISK', currencyName: '冰岛克朗', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 0, description: '几乎完全不需要给小费，所有服务费均已包含。' } },
  '挪威': { currencyCode: 'NOK', currencyName: '挪威克朗', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 0, description: '通常不期待小费，若对服务极其满意可给 5% 或凑整。' } },
  '瑞典': { currencyCode: 'SEK', currencyName: '瑞典克朗', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 0, description: '不需要给小费，结账时凑整到整数克朗即可。' } },
  
  '英国': { currencyCode: 'GBP', currencyName: '英镑', plugType: ['G'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '若账单未包含 12.5% 的服务费，通常需支付 10-15% 的小费。' } },
  '爱尔兰': { ...baseEU, plugType: ['G'], tipping: { percentage: 10, description: '若未包含服务费，通常给 10-12.5% 的小费。' } },
  '马耳他': { ...baseEU, plugType: ['G'] },
  '塞浦路斯': { ...baseEU, plugType: ['G'] },
  
  '瑞士': { currencyCode: 'CHF', currencyName: '瑞士法郎', plugType: ['C', 'J'], voltage: '230V 50Hz', tipping: { percentage: 5, description: '法律规定服务费已包含，不强制小费，但常会凑整或给 5% 表达感谢。' } },
  '列支敦士登': { currencyCode: 'CHF', currencyName: '瑞士法郎', plugType: ['C', 'J'], voltage: '230V 50Hz', tipping: { percentage: 5, description: '与瑞士类似，服务费已包含。' } },
  
  '法国': { ...baseEU, plugType: ['C', 'E'], tipping: { percentage: 5, description: '账单已标明“Service Compris”(含服务费)，通常只需在桌上留 1-2 欧元硬币。' } },
  '意大利': { ...baseEU, plugType: ['C', 'F', 'L'], tipping: { percentage: 5, description: '餐厅常收取“Coperto”(餐位费)，无需额外高额小费，留几欧元零钱即可。' } },
  '西班牙': { ...baseEU, tipping: { percentage: 5, description: '当地人很少给大额小费，留些零钱或 5% 即可。' } },
  '葡萄牙': { ...baseEU, tipping: { percentage: 5, description: '旅游区通常期待 5-10%，本地小餐馆留零钱即可。' } },
  
  '德国': { ...baseEU, tipping: { percentage: 10, description: '结账时直接将包含 5-10% 小费的总金额告诉服务员（直接凑整）。' } },
  '奥地利': { ...baseEU, tipping: { percentage: 10, description: '类似德国，结账时直接告知包含 5-10% 小费后的总额。' } },
  
  '捷克': { currencyCode: 'CZK', currencyName: '捷克克朗', plugType: ['C', 'E'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常给 10%，结账时告诉服务员加上小费后的总金额。' } },
  '匈牙利': { currencyCode: 'HUF', currencyName: '匈牙利福林', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '10-15%，不要把钱留在桌子上，结账时直接告诉服务员。' } },
  '波兰': { currencyCode: 'PLN', currencyName: '波兰兹罗提', plugType: ['C', 'E'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常 10%，如果刷卡前请说明加上小费。' } },
  '罗马尼亚': { currencyCode: 'RON', currencyName: '罗马尼亚列伊', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常 10%，有些地方不接受刷卡付小费，需备现金。' } },
  '保加利亚': { currencyCode: 'BGN', currencyName: '保加利亚列弗', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常给 10% 左右。' } },
  '塞尔维亚': { currencyCode: 'RSD', currencyName: '塞尔维亚第纳尔', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '10% 是标准小费。' } },
  '克罗地亚': { ...baseEU, tipping: { percentage: 10, description: '高档餐厅 10-15%，咖啡馆凑整即可。' } },
  '波斯尼亚和黑塞哥维那': { currencyCode: 'BAM', currencyName: '波黑可兑换马克', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常给 10% 左右。' } },
  '波黑': { currencyCode: 'BAM', currencyName: '波黑可兑换马克', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '通常给 10% 左右。' } },
  '阿尔巴尼亚': { currencyCode: 'ALL', currencyName: '阿尔巴尼亚列克', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '约 10%，以现金支付最受欢迎。' } },
  '北马其顿': { currencyCode: 'MKD', currencyName: '北马其顿第纳尔', plugType: ['C', 'F'], voltage: '230V 50Hz', tipping: { percentage: 10, description: '约 10% 左右。' } },
  
  '俄罗斯': { currencyCode: 'RUB', currencyName: '俄罗斯卢布', plugType: ['C', 'F'], voltage: '220V 50Hz', tipping: { percentage: 10, description: '通常 10%，且倾向于直接给服务员现金。' } },
  '乌克兰': { currencyCode: 'UAH', currencyName: '乌克兰格里夫纳', plugType: ['C', 'F'], voltage: '220V 50Hz', tipping: { percentage: 10, description: '10% 左右，多数直接给现金。' } },
  '白俄罗斯': { currencyCode: 'BYN', currencyName: '白俄罗斯卢布', plugType: ['C', 'F'], voltage: '220V 50Hz', tipping: { percentage: 5, description: '5-10%，非强制。' } },
  '摩尔多瓦': { currencyCode: 'MDL', currencyName: '摩尔多瓦列伊', plugType: ['C', 'F'], voltage: '220V 50Hz', tipping: { percentage: 10, description: '5-10%，看服务质量。' } },
};

export function getCountryPracticalInfo(country: string): CountryPracticalInfo {
  // 遍历匹配
  for (const [key, info] of Object.entries(countryInfoMap)) {
    if (country.includes(key)) {
      return info;
    }
  }
  // 兜底返回欧元区配置
  return baseEU;
}
