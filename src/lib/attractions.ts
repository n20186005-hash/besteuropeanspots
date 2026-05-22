import { getAttractionCountries } from "@/lib/countries";
import attractionsData from "@/data/attractions.json";
import { types } from "./constants";

export * from "./constants";

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

export function getAttractions(): Attraction[] {
  return attractionsData as Attraction[];
}

export function getAttraction(slug: string): Attraction | undefined {
  return getAttractions().find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAttractions().map((a) => a.slug);
}

export function getRegions(): string[] {
  return Array.from(
    new Set(getAttractions().flatMap((a) => getAttractionCountries(a)).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

export function getStats() {
  return {
    destinations: getAttractions().length,
    countries: getRegions().length,
    regions: getRegions().length,
    types: types.length,
  };
}
