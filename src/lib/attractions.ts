import attractionsData from "@/data/attractions.json";

export interface Attraction {
  name: string;
  englishName: string;
  country: string;
  countries?: string[];
  countrySlug?: string;
  city: string;
  slug: string;
  description: string;
  openingHours: string;
  ticketPrice: string;
  address: string;
  transport: string;
  bestSeason: string;
  suggestedDuration: string;
  tips: string;
  region: string;
  type: string;
  category?: string[];
}

export const attractions: Attraction[] = attractionsData as Attraction[];

export function getAttraction(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return attractions.map((a) => a.slug);
}

// 动态提取所有的 Region 和 Type，避免硬编码导致部分数据无法显示
export const regions = Array.from(new Set(attractions.map(a => a.region).filter(Boolean)));
export const types = Array.from(new Set(attractions.map(a => a.type).filter(Boolean)));
export const countries = Array.from(new Set(attractions.map(a => a.country).filter(Boolean)));

export const stats = {
  destinations: attractions.length,
  countries: countries.length,
  regions: regions.length,
  types: types.length,
};

export const regionLabelsEN: Record<string, string> = {
  "法国": "France",
  "比利时・卢森堡": "Belgium & Luxembourg",
  "德国": "Germany",
  "意大利": "Italy",
  "西班牙・葡萄牙": "Spain & Portugal",
  "瑞士・奥地利": "Switzerland & Austria",
  "捷克・斯洛伐克・匈牙利": "Czech Republic, Slovakia & Hungary",
  "斯洛文尼亚・克罗地亚・波黑・黑山": "Slovenia, Croatia, Bosnia & Montenegro",
  "希腊": "Greece",
  "北欧": "Nordics",
  "巴尔干・东欧": "Balkans & Eastern Europe",
};

export const typeLabelsEN: Record<string, string> = {
  "古城": "Old Town",
  "城堡": "Castle",
  "修道院": "Abbey",
  "教堂": "Cathedral",
  "遗址": "Ruins",
  "自然": "Nature",
  "广场": "Square",
  "其他": "Other",
};

// Hero images placeholder colors mapped to regions
export const regionColors: Record<string, string> = {
  "法国": "#3b5998",
  "比利时・卢森堡": "#8b4513",
  "德国": "#2f4f4f",
  "意大利": "#b22222",
  "西班牙・葡萄牙": "#d2691e",
  "瑞士・奥地利": "#228b22",
  "捷克・斯洛伐克・匈牙利": "#800080",
  "斯洛文尼亚・克罗地亚・波黑・黑山": "#008080",
  "希腊": "#4169e1",
  "北欧": "#4682b4",
  "巴尔干・东欧": "#8b0000",
};
