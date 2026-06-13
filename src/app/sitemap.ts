import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/notion'
import { SITE_URL }      from '@/lib/constants'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:             SITE_URL,
      lastModified:    new Date(),
      changeFrequency: 'daily',
      priority:        1.0,
    },
    {
      url:             `${SITE_URL}/como-registrarse-en-binance`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.9,
    },
    {
      url:             `${SITE_URL}/bono-binance-nuevo-usuario`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.9,
    },
    {
      url:             `${SITE_URL}/blog`,
      lastModified:    new Date(),
      changeFrequency: 'daily',
      priority:        0.8,
    },
  ]

  // Artículos del blog (dinámicos desde Notion)
  let articlePages: MetadataRoute.Sitemap = []
  try {
    const articles = await getAllArticles()
    articlePages = articles.map((article) => ({
      url:             `${SITE_URL}/blog/${article.slug}`,
      lastModified:    new Date(article.updatedAt),
      changeFrequency: 'weekly' as const,
      priority:        0.7,
    }))
  } catch {
    // Notion no configurado aún — solo páginas estáticas
  }

  return [...staticPages, ...articlePages]
}
