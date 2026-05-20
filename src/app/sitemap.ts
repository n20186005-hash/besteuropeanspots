import { MetadataRoute } from 'next'
import { regions } from '@/lib/attractions'
import { getCountrySlug } from '@/lib/countries'
import { getAllSlugsByCategory } from '@/lib/data'

export const dynamic = 'force-static'
export const revalidate = 86400

const baseUrl = 'https://www.besteuropeanspots.com'

// 定义 Sitemap 分片逻辑
export async function generateSitemaps() {
  const encyclopediaSlugs = await getAllSlugsByCategory("encyclopedia");
  const historySlugs = await getAllSlugsByCategory("history");
  
  const CHUNK_SIZE = 10000;
  
  const sitemaps = [{ id: 0 }]; // 0 for core
  let nextId = 1;
  
  for (let i = 0; i < Math.ceil(encyclopediaSlugs.length / CHUNK_SIZE); i++) {
    sitemaps.push({ id: nextId++ }); // encyclopedia
  }
  for (let i = 0; i < Math.ceil(historySlugs.length / CHUNK_SIZE); i++) {
    sitemaps.push({ id: nextId++ }); // history
  }
  
  return sitemaps;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const CHUNK_SIZE = 10000;
  const encyclopediaSlugs = await getAllSlugsByCategory("encyclopedia");
  const historySlugs = await getAllSlugsByCategory("history");
  const numEncyclopediaChunks = Math.ceil(encyclopediaSlugs.length / CHUNK_SIZE);
  const numHistoryChunks = Math.ceil(historySlugs.length / CHUNK_SIZE);

  if (id === 0) {
    const categoryUrls = ['encyclopedia', 'travelogue', 'history'].map((cat) => ({
      url: `${baseUrl}/category/${cat}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    const destinationUrls = regions.map((region) => ({
      url: `${baseUrl}/destinations/${getCountrySlug(region)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/en`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/destinations`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      ...categoryUrls,
      ...destinationUrls,
    ];
  }

  if (id > 0 && id <= numEncyclopediaChunks) {
    const chunkIndex = id - 1;
    const slugs = encyclopediaSlugs.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    
    return slugs.map((slug) => ({
      url: `${baseUrl}/encyclopedia/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  if (id > numEncyclopediaChunks && id <= numEncyclopediaChunks + numHistoryChunks) {
    const chunkIndex = id - numEncyclopediaChunks - 1;
    const slugs = historySlugs.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    
    return slugs.map((slug) => ({
      url: `${baseUrl}/history/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  return [];
}
