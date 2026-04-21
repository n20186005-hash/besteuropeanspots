import { pinyin } from "pinyin-pro";
import type { Attraction } from "@/lib/attractions";

export const GLOBAL_COUNTRIES_BY_CONTINENT = {
  亚洲: ['中国', '日本', '韩国', '朝鲜', '蒙古', '越南', '老挝', '柬埔寨', '泰国', '缅甸', '马来西亚', '新加坡', '印尼', '文莱', '菲律宾', '东帝汶', '尼泊尔', '不丹', '孟加拉国', '印度', '巴基斯坦', '斯里兰卡', '马尔代夫', '哈萨克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '乌兹别克斯坦', '土库曼斯坦', '阿富汗', '伊拉克', '伊朗', '叙利亚', '约旦', '黎巴嫩', '以色列', '巴勒斯坦', '沙特阿拉伯', '巴林', '卡塔尔', '科威特', '阿联酋', '阿曼', '也门', '格鲁吉亚', '亚美尼亚', '阿塞拜疆', '土耳其', '塞浦路斯'],
  欧洲: ['法国', '比利时', '卢森堡', '德国', '意大利', '西班牙', '奥地利', '瑞士', '捷克', '斯洛伐克', '匈牙利', '斯洛文尼亚', '克罗地亚', '黑山', '希腊', '瑞典', '挪威', '丹麦', '芬兰', '罗马尼亚', '塞尔维亚', '北马其顿', '立陶宛', '爱沙尼亚', '葡萄牙', '波黑', '英国', '荷兰', '阿尔巴尼亚', '拉脱维亚', '马耳他', '保加利亚', '波兰', '俄罗斯', '白俄罗斯', '乌克兰', '摩尔多瓦', '冰岛', '爱尔兰', '安道尔', '摩纳哥', '列支敦士登', '圣马力诺', '梵蒂冈'],
  美洲: ['美国', '加拿大', '墨西哥', '危地马拉', '伯利兹', '萨尔瓦多', '洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '巴哈马', '古巴', '牙买加', '海地', '多米尼加', '安提瓜和巴布达', '圣基茨和尼维斯', '多米尼克', '圣卢西亚', '圣文森特和格林纳丁斯', '格林纳达', '巴巴多斯', '特立尼达和多巴哥', '哥伦比亚', '委内瑞拉', '圭亚那', '苏里南', '厄瓜多尔', '秘鲁', '玻利维亚', '巴西', '智利', '阿根廷', '乌拉圭', '巴拉圭'],
  非洲: ['埃及', '苏丹', '南苏丹', '利比亚', '突尼斯', '阿尔及利亚', '摩洛哥', '埃塞俄比亚', '厄立特里亚', '索马里', '吉布提', '肯尼亚', '坦桑尼亚', '乌干达', '卢旺达', '布隆迪', '塞舌尔', '毛里求斯', '安哥拉', '赞比亚', '马拉维', '莫桑比克', '纳米比亚', '博茨瓦纳', '津巴布韦', '南非', '斯威士兰', '莱索托', '马达加斯加', '科摩罗', '佛得角', '塞内加尔', '冈比亚', '马里', '布基纳法索', '几内亚', '几内亚比绍', '塞拉利昂', '利比里亚', '科特迪瓦', '加纳', '多哥', '贝宁', '尼日尔', '尼日利亚', '喀麦隆', '赤道几内亚', '乍得', '中非', '圣多美和普林西比', '加蓬', '刚果（布）', '刚果（金）'],
  大洋洲: ['澳大利亚', '新西兰', '巴布亚新几内亚', '所罗门群岛', '瓦努阿图', '密克罗尼西亚', '马绍尔群岛', '帕劳', '瑙鲁', '基里巴斯', '图瓦卢', '萨摩亚', '斐济', '汤加', '库克群岛', '纽埃'],
} as const;

export const ALL_STANDARD_COUNTRIES = Object.values(GLOBAL_COUNTRIES_BY_CONTINENT).flat();

export function getCountrySlug(country: string) {
  if (country === "英国") return "uk";
  if (country === "美国") return "usa";
  if (country === "波黑") return "bosnia-and-herzegovina";
  if (country === "塞浦路斯") return "cyprus";
  return pinyin(country, { toneType: "none", type: "array" }).join("").toLowerCase();
}

export function getCountryBySlug(slug: string) {
  return ALL_STANDARD_COUNTRIES.find((country) => getCountrySlug(country) === slug);
}

export function getAttractionCountries(attraction: Pick<Attraction, "country" | "countries">) {
  if (Array.isArray(attraction.countries) && attraction.countries.length > 0) {
    return attraction.countries;
  }
  return attraction.country ? [attraction.country] : [];
}
