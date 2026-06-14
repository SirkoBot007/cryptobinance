import { notFound }                      from 'next/navigation'
import { getArticleBySlug, getAllArticles } from '@/lib/notion'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { CTAButton, InlineCTAButton }      from '@/components/ui/CTAButton'
import { SITE_NAME }                       from '@/lib/constants'
import type { Metadata }                   from 'next'

// ISR: revalidar cada hora (n8n llama al webhook para forzar antes si es necesario)
export const revalidate = 3600

// Genera rutas estáticas en build time
export async function generateStaticParams() {
  try {
    const articles = await getAllArticles()
    return articles.map((a) => ({ slug: a.slug }))
  } catch {
    return []
  }
}

// Metadata dinámica por artículo
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: 'Artículo no encontrado' }

  return {
    title:       `${article.title} | ${SITE_NAME}`,
    description: article.description,
    openGraph: {
      title:       article.title,
      description: article.description,
      type:        'article',
      publishedTime: article.publishedAt,
      modifiedTime:  article.updatedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <>
      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({
            title:         article.title,
            description:   article.description,
            slug:          article.slug,
            datePublished: article.publishedAt,
            dateModified:  article.updatedAt,
            image:         article.coverImage,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Inicio', href: '/' },
            { name: 'Blog',   href: '/blog' },
            { name: article.title, href: `/blog/${article.slug}` },
          ])),
        }}
      />

      {/* Hero artículo */}
      <section className="section bg-hero-gradient border-b border-brand-border">
        <div className="container-main max-w-3xl">
          {article.category && (
            <div className="badge mb-4">{article.category}</div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-brand-muted mb-6">{article.description}</p>
          <div className="flex flex-wrap gap-4 items-center text-sm text-brand-muted">
            <time dateTime={article.publishedAt}>
              📅 {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </time>
            <span>⏱️ {article.readingTime} min de lectura</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {article.coverImage && (
        <div className="container-main max-w-3xl -mt-6 mb-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full rounded-2xl aspect-video object-cover border border-brand-border"
          />
        </div>
      )}

      {/* Contenido */}
      <article className="section">
        <div className="container-main max-w-3xl">

          {/* CTA top inline */}
          <div className="card border-brand-yellow/30 mb-8 flex flex-col sm:flex-row
                          items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-brand-text text-sm">¿Aún no tienes cuenta en Binance?</p>
              <p className="text-brand-muted text-xs">Regístrate gratis y accede al bono de bienvenida.</p>
            </div>
            <CTAButton size="sm" source={`article-top-${article.slug}`} showArrow={false}>
              Crear cuenta gratis
            </CTAButton>
          </div>

          {/* Contenido del artículo */}
          <div className="prose-crypto">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <p className="text-brand-muted">Cargando contenido...</p>
            )}
          </div>

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-brand-border">
              {article.tags.map((tag) => (
                <span key={tag} className="badge text-xs">{tag}</span>
              ))}
            </div>
          )}

          {/* CTA final — la conversión más importante */}
          <div className="mt-10 card border-brand-yellow/30 text-center p-8">
            <p className="text-xl font-black mb-2">
              ¿Te ha resultado útil esta guía?
            </p>
            <p className="text-brand-muted mb-6">
              Empieza a invertir en Binance hoy con nuestro enlace de referido y
              accede al bono de bienvenida disponible para nuevos usuarios.
            </p>
            <CTAButton size="lg" source={`article-bottom-${article.slug}`}>
              Abrir cuenta en Binance gratis
            </CTAButton>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-xs text-brand-muted border-t border-brand-border pt-6">
            <strong>Aviso legal:</strong> Este artículo es de carácter informativo y no
            constituye asesoramiento financiero. Las inversiones en criptomonedas conllevan
            riesgo de pérdida. {SITE_NAME} participa en el programa de referidos de Binance.
          </div>
        </div>
      </article>
    </>
  )
}
