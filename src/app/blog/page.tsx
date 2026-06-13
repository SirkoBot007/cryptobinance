import { generateMetadata as genMeta } from '@/lib/metadata'
import { getRecentArticles } from '@/lib/notion'
import { breadcrumbSchema } from '@/lib/schema'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = genMeta({
  title: 'Blog — Guías y tutoriales de criptomonedas',
  description: 'Artículos actualizados sobre criptomonedas, Binance, Bitcoin, Ethereum y todo el ecosistema crypto para principiantes en España y Latinoamérica.',
  path: '/blog',
})

export default async function BlogPage() {
  let articles: Awaited<ReturnType<typeof getRecentArticles>> = []
  try { articles = await getRecentArticles(24) } catch {}
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Inicio', href: '/' },{ name: 'Blog', href: '/blog' }])) }} /><section className="section bg-hero-gradient border-b border-brand-border"><div className="container-main max-w-3xl text-center"><div className="badge mb-4">Blog</div><h1 className="text-4xl sm:text-5xl font-black mb-4">Guías y tutoriales de{' '}<span className="text-gradient">criptomonedas</span></h1><p className="text-brand-muted text-lg">Todo lo que necesitas saber para invertir con inteligencia.</p></div></section><section className="section"><div className="container-main">{articles.length === 0 ? <div className="text-center py-20"><div className="text-6xl mb-4">✍️</div><h2 className="text-2xl font-bold mb-2">Contenido en camino</h2><p className="text-brand-muted">Estamos preparando las primeras guías.</p></div> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{articles.map((a) => (<Link key={a.id} href={`/blog/${a.slug}`} className="card group flex flex-col"><h2 className="font-bold text-brand-text mb-2 line-clamp-2">{a.title}</h2><p className="text-brand-muted text-sm line-clamp-3">{a.description}</p></Link>))}</div>}</div></section></>)
}
