import "server-only";

import type { Attraction } from "@/lib/attractions";
import { getAttractionCountries } from "@/lib/countries";

async function getBaseUrlFromRequest(): Promise<string | null> {
  try {
    const mod = await import("next/headers");
    const h = await mod.headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (!host) return null;
    const proto = h.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}`;
  } catch {
    return null;
  }
}

async function getSiteUrl(): Promise<string> {
  const headerBase = await getBaseUrlFromRequest();
  if (headerBase) return headerBase.replace(/\/$/, "");

  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");

  return "http://localhost:3000";
}

export async function getRemoteAttractions(): Promise<Attraction[]> {
  const baseUrl = await getSiteUrl();
  const url = `${baseUrl}/data/attractions.json`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch attractions dataset: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as Attraction[];
}

export async function getRemoteAttraction(slug: string): Promise<Attraction | undefined> {
  const attractions = await getRemoteAttractions();
  return attractions.find((attraction) => attraction.slug === slug);
}

export async function getRemoteRegions(): Promise<string[]> {
  const attractions = await getRemoteAttractions();
  return Array.from(
    new Set(attractions.flatMap((a) => getAttractionCountries(a)).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b, "zh-CN"));
}
