import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/notion'
import { SITE_URL} from '@/lib/constants'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${SITE_URL}/como-registrarse-en-binance`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/bono-binance-nuevo-usuario`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
  ]
  let articlePages = []
  try { const arts = await getAllArticles(); articlePages = arts.map(a => ({ url: `${SITE_URL}/blog/${a.slug}`, lastModified: new Date(a.updatedAt), changeFrequency: 'weekly' as const, priority: 0.7 })) } catch {}
  return [...staticPages, ...articlePages]
}
