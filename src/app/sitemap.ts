export const runtime = "edge";

import { MetadataRoute } from 'next';
import { getAttractions, getAllSlugs } from "@/lib/attractions";
import { getCountrySlug } from '@/lib/countries';

export const revalidate = 86400

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.besteuropeanspots.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes = [
    "",
    "/destinations",
    "/category/history",
    "/category/encyclopedia",
    "/category/travelogue",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 1.0,
  }));

  const countries = Array.from(new Set(getAttractions().map((a) => a.country)));
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/destinations/${getCountrySlug(country)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const attractionRoutes = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/attractions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...countryRoutes, ...attractionRoutes];
}
