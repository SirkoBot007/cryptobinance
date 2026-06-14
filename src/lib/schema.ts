import { SITE_URL, SITE_NAME, AFFILIATE_LINK } from './constants'

// ============================================================
// SCHEMA.TS — Structured Data (Schema.org) para SEO avanzado
// Los rich snippets mejoran el CTR en Google.
// ============================================================

/** Schema para el sitio web (root) */
export const websiteSchema = {
  '@context':  'https://schema.org',
  '@type':     'WebSite',
  name:        SITE_NAME,
  url:         SITE_URL,
  description: 'Guías y tutoriales de criptomonedas con Binance para España y Latinoamérica',
  inLanguage:  'es',
  potentialAction: {
    '@type':      'SearchAction',
    target:       `${SITE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

/** Schema para artículos del blog */
export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title:         string
  description:   string
  slug:          string
  datePublished: string
  dateModified?: string
  image?:        string
}) {
  return {
    '@context':     'https://schema.org',
    '@type':        'Article',
    headline:       title,
    description,
    url:            `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified:   dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name:    SITE_NAME,
      url:     SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name:    SITE_NAME,
      url:     SITE_URL,
    },
    image: image || `${SITE_URL}/og-default.png`,
    inLanguage: 'es',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  }
}

/** Schema de FAQ — genera rich snippets de preguntas en Google */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type':          'Question',
      name:             question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

/** Schema HowTo — para páginas de "cómo registrarse" */
export function howToSchema({
  name,
  description,
  steps,
}: {
  name:        string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context':   'https://schema.org',
    '@type':      'HowTo',
    name,
    description,
    tool: [{ '@type': 'HowToTool', name: 'Cuenta de email' }],
    step: steps.map((s, i) => ({
      '@type':  'HowToStep',
      position: i + 1,
      name:     s.name,
      text:     s.text,
      url:      i === 0 ? AFFILIATE_LINK : undefined,
    })),
  }
}

/** Schema BreadcrumbList */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':    'ListItem',
      position:   i + 1,
      name:       item.name,
      item:       `${SITE_URL}${item.href}`,
    })),
  }
}
