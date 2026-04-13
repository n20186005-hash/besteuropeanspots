import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const attractions = await import('@/data/attractions.json').then(m => m.default)
  
  const baseUrl = 'https://www.besteuropeanspots.com'

  const attractionUrls = attractions.map((attraction) => ({
    url: `${baseUrl}/attractions/${attraction.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...attractionUrls,
  ]
}