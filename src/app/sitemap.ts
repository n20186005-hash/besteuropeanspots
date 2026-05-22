import { MetadataRoute } from 'next';
import { getAttractions, getAllSlugs } from "@/lib/attractions";
import { getCountrySlug } from '@/lib/countries';

export const dynamic = 'force-static'
export const revalidate = 86400

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.besteuropeanspots.com';

// 定义 Sitemap 分片逻辑
export async function generateSitemaps() {
  const allSlugs = getAllSlugs();
  const CHUNK_SIZE = 10000;
  
  const sitemaps = [{ id: 0 }]; // 0 for core
  let nextId = 1;
  
  for (let i = 0; i < Math.ceil(allSlugs.length / CHUNK_SIZE); i++) {
    sitemaps.push({ id: nextId++ });
  }
  
  return sitemaps;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const CHUNK_SIZE = 10000;
  const allSlugs = getAllSlugs();
  const numChunks = Math.ceil(allSlugs.length / CHUNK_SIZE);

  if (id === 0) {
    // Core routes
    const routes = [
      '',
      '/destinations',
      '/category/history',
      '/category/encyclopedia',
      '/category/travelogue'
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    }));

    // Country routes
    const countries = Array.from(new Set(getAttractions().map(a => a.country)));
    const countryRoutes = countries.map((country) => ({
      url: `${baseUrl}/destinations/${getCountrySlug(country)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    return [...routes, ...countryRoutes];
  }

  if (id > 0 && id <= numChunks) {
    const chunkIndex = id - 1;
    const slugs = allSlugs.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    
    return slugs.map((slug) => ({
      url: `${baseUrl}/attractions/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  return [];
}
