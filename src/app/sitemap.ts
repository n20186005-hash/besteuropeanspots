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
  
  // 假设每 10,000 个 URL 为一个文件，避免达到 50,000 的上限
  const CHUNK_SIZE = 10000;
  
  const sitemaps = [{ id: 'core' }];
  
  for (let i = 0; i < Math.ceil(encyclopediaSlugs.length / CHUNK_SIZE); i++) {
    sitemaps.push({ id: `encyclopedia-${i}` });
  }
  for (let i = 0; i < Math.ceil(historySlugs.length / CHUNK_SIZE); i++) {
    sitemaps.push({ id: `history-${i}` });
  }
  
  return sitemaps;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const isCore = id === 'core';
  const isEncyclopedia = id.startsWith('encyclopedia-');
  const isHistory = id.startsWith('history-');
  
  const CHUNK_SIZE = 10000;

  if (isCore) {
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

  if (isEncyclopedia) {
    const chunkIndex = parseInt(id.split('-')[1], 10);
    const allSlugs = await getAllSlugsByCategory("encyclopedia");
    const slugs = allSlugs.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    
    return slugs.map((slug) => ({
      url: `${baseUrl}/encyclopedia/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  if (isHistory) {
    const chunkIndex = parseInt(id.split('-')[1], 10);
    const allSlugs = await getAllSlugsByCategory("history");
    const slugs = allSlugs.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    
    return slugs.map((slug) => ({
      url: `${baseUrl}/history/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  return [];
}
