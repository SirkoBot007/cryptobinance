import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'

// ============================================================
// METADATA.TS — Helpers para SEO con Next.js Metadata API
// ============================================================

interface PageMetaProps {
  title:        string
  description?: string
  path?:        string
  image?:       string
  noIndex?:     boolean
}

/**
 * Genera metadata completa y optimizada para cada página.
 * Uso: export const metadata = generateMetadata({ title: '...', path: '/...' })
 */
export function generateMetadata({
  title,
  description = SITE_DESCRIPTION,
  path        = '/',
  image       = '/og-default.png',
  noIndex     = false,
}: PageMetaProps): Metadata {
  const url      = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: url,
      languages: {
        'es-ES': url,
        'es-419': url, // LATAM
      },
    },

    openGraph: {
      title:       fullTitle,
      description,
      url,
      siteName:    SITE_NAME,
      type:        'website',
      locale:      'es_ES',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      images:      [image],
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },

    other: {
      'geo.region':   'ES',
      'geo.placename': 'España',
    },
  }
}

/** Metadata por defecto para el root layout */
export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default:  `${SITE_NAME} — Tu guía de criptomonedas con Binance`,
  },
  description:   SITE_DESCRIPTION,
  metadataBase:  new URL(SITE_URL),
  authors:       [{ name: SITE_NAME }],
  creator:       SITE_NAME,
  publisher:     SITE_NAME,
  category:      'finance',
  keywords: [
    'binance', 'criptomonedas', 'bitcoin', 'ethereum', 'invertir crypto',
    'binance españa', 'binance latinoamérica', 'como comprar bitcoin',
    'exchange crypto', 'trading crypto principiantes',
  ],
}
