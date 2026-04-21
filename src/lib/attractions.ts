import attractionsData from "@/data/attractions.json";
import { getAttractionCountries } from "@/lib/countries";

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
  raw_type?: string;
  category?: string[];
}

export const STANDARD_TYPES = [
  "城镇与村落",
  "建筑与地标",
  "宗教遗产",
  "历史遗迹与考古",
  "文化艺术与休闲",
  "自然景观",
] as const;

export const attractions: Attraction[] = attractionsData as Attraction[];

export function getAttraction(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return attractions.map((a) => a.slug);
}

export const regions = Array.from(
  new Set(attractions.flatMap((a) => getAttractionCountries(a)).filter(Boolean))
).sort((a, b) => a.localeCompare(b, "zh-CN"));
export const types = [...STANDARD_TYPES];
export const countries = regions;

export const stats = {
  destinations: attractions.length,
  countries: countries.length,
  regions: regions.length,
  types: types.length,
};

export const regionLabelsEN: Record<string, string> = {
  法国: "France",
  德国: "Germany",
  意大利: "Italy",
  西班牙: "Spain",
  葡萄牙: "Portugal",
  波黑: "Bosnia & Herzegovina",
  英国: "United Kingdom",
  美国: "United States",
};

export const typeLabelsEN: Record<string, string> = {
  "城镇与村落": "Towns & Villages",
  "建筑与地标": "Architecture & Landmarks",
  "宗教遗产": "Religious Heritage",
  "历史遗迹与考古": "Historical Ruins & Archaeology",
  "文化艺术与休闲": "Culture, Art & Leisure",
  "自然景观": "Natural Landscapes",
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
