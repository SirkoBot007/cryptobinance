import { notFound }                      from 'next/navigation'
import { getArticleBySlug, getAllArticles } from '@/lib/notion'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { CTAButton, InlineCTAButton }      from '@/components/ui/CTAButton'
import { SITE_NAME }                       from '@/lib/constants'
import type { Metadata }                   from 'next'

export const revalidate = 3600

export async function generateStaticParams() {
  try { const articles = await getAllArticles(); return articles.map((a) => ({ slug: a.slug })) } catch { return [] }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: 'Artículo no encontrado' }
  return {
    title: `${article.title} | ${SITE_NAME}`, description: article.description,
    openGraph: { title: article.title, description: article.description, type: 'article', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: article.coverImage ? [{ url: article.coverImage }] : undefined },
    alternates: { canonical: `/blog/${article.slug}` },
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: article.title, description: article.description, slug: article.slug, datePublished: article.publishedAt, dateModified: article.updatedAt, image: article.coverImage })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Inicio', href: '/' },{ name: 'Blog', href: '/blog' },{ name: article.title, href: `/blog/${article.slug}` }])) }} /><section className="section bg-hero-gradient border-b border-brand-border"><div className="container-main max-w-3xl">{article.category && <div className="badge mb-4">{article.category}</div>}<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">{article.title}</h1><p className="text-xl text-brand-muted mb-6">{article.description}</p><div className="flex flex-wrap gap-4 items-center text-sm text-brand-muted"><time dateTime={article.publishedAt}>📅 {new Date(article.publishedAt).toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'})}</time><span>⏱️ {article.readingTime} min de lectura</span></div></div></section>{article.coverImage && <div className="container-main max-w-3xl -mt-6"><img src={article.coverImage} alt={article.title} className="w-full rounded-2xl aspect-video object-cover border border-brand-border" /></div>}<article className="section"><div className="container-main max-w-3xl"><div className="card border-brand-yellow/30 mb-8"><p className="font-semibold text-brand-text text-sm">¿Añn no tienes cuenta en Binance?</p><CTAButton size="sm" source={`article-top-${article.slug}`} showArrow={false}>Crear cuenta gratis</CTAButton></div><div className="prose-crypto">{article.content ? <div dangerouslySetInnerHTML={{ __html: article.content }} /> : <p className="text-brand-muted">Cargando contenido...</p>}</div><div className="mt-10 card border-brand-yellow/30 text-center p-8"><p className="text-xl font-black mb-2">·Te ha resultado útil esta guía?</p><CTAButton size="lg" source={`article-bottom-${article.slug}`}>Abrir cuenta en Binance gratis</CTAButton></div></div></article></>)
}
