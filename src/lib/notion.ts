// ============================================================
// NOTION.TS — Cliente Notion para CMS de contenido
// n8n escribe aquí → Next.js lee de aquí
// NOTA: @notionhq/client se instala en FASE 4.
// El build funciona sin él gracias a los try/catch.
// ============================================================

// ── Tipos (independientes del paquete) ───────────────────────

export interface Article {
  id:            string
  slug:          string
  title:         string
  description:   string
  content:       string
  publishedAt:   string
  updatedAt:     string
  status:        'published' | 'draft' | 'review'
  category:      string
  tags:          string[]
  coverImage?:   string
  readingTime:   number
}

export interface Keyword {
  id:         string
  keyword:    string
  volume:     number
  difficulty: number
  intent:     'informacional' | 'transaccional' | 'navegacional'
  status:     'pendiente' | 'asignada' | 'publicada'
}

// ── Cliente Notion (carga dinámica — no falla si no está instalado) ──

async function getNotionClient() {
  try {
    const { Client } = await import('@notionhq/client' as any)
    return new Client({ auth: process.env.NOTION_API_KEY })
  } catch {
    // @notionhq/client no instalado todavía (se añade en Fase 4)
    return null
  }
}

const ARTICLES_DB = process.env.NOTION_ARTICLES_DB_ID ?? ''
const KEYWORDS_DB = process.env.NOTION_KEYWORDS_DB_ID ?? ''

// ── Helpers ──────────────────────────────────────────────────

function getText(property: any): any {
  if (!property) return ''
  if (property.type === 'title')        return property.title?.[0]?.plain_text || ''
  if (property.type === 'rich_text')    return property.rich_text?.[0]?.plain_text || ''
  if (property.type === 'select')       return property.select?.name || ''
  if (property.type === 'url')          return property.url || ''
  if (property.type === 'number')       return property.number ?? 0
  if (property.type === 'multi_select') return property.multi_select?.map((s: any) => s.name) || []
  if (property.type === 'date')         return property.date?.start || ''
  return ''
}

function estimateReadingTime(text: string): number {
  return Math.ceil(text.split(/\s+/).length / 200)
}

function mapPageToArticle(page: any): Article {
  const p = page.properties ?? {}
  return {
    id:          page.id,
    slug:        getText(p.Slug),
    title:       getText(p.Title),
    description: getText(p.Description),
    content:     '',
    publishedAt: getText(p.PublishedAt) || page.created_time,
    updatedAt:   page.last_edited_time,
    status:      getText(p.Status) as Article['status'],
    category:    getText(p.Category),
    tags:        getText(p.Tags) as string[],
    coverImage:  getText(p.CoverImage),
    readingTime: 0,
  }
}

function blocksToHtml(blocks: any[]): string {
  return blocks
    .map((block) => {
      const type    = block.type
      const content = block[type]
      if (!content?.rich_text) return ''
      const text = content.rich_text
        .map((rt: any) => {
          let t = rt.plain_text
          if (rt.annotations?.bold)   t = `<strong>${t}</strong>`
          if (rt.annotations?.italic) t = `<em>${t}</em>`
          if (rt.annotations?.code)   t = `<code>${t}</code>`
          if (rt.href)                t = `<a href="${rt.href}" target="_blank" rel="noopener noreferrer">${t}</a>`
          return t
        })
        .join('')
      if (type === 'heading_1')    return `<h1>${text}</h1>`
      if (type === 'heading_2')    return `<h2>${text}</h2>`
      if (type === 'heading_3')    return `<h3>${text}</h3>`
      if (type === 'bulleted_list_item') return `<li>${text}</li>`
      if (type === 'numbered_list_item') return `<li>${text}</li>`
      if (type === 'quote')        return `<blockquote>${text}</blockquote>`
      return `<p>${text}</p>`
    })
    .join('\n')
}

// ── API pública ───────────────────────────────────────────────

export async function getAllArticles(): Promise<Article[]> {
  const notion = await getNotionClient()
  if (!notion || !ARTICLES_DB) return []
  try {
    const response = await notion.databases.query({
      database_id: ARTICLES_DB,
      filter:      { property: 'Status', select: { equals: 'published' } },
      sorts:       [{ property: 'PublishedAt', direction: 'descending' }],
    })
    return response.results.map(mapPageToArticle)
  } catch (error) {
    console.error('[Notion] getAllArticles:', error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const notion = await getNotionClient()
  if (!notion || !ARTICLES_DB) return null
  try {
    const response = await notion.databases.query({
      database_id: ARTICLES_DB,
      filter: {
        and: [
          { property: 'Slug',   rich_text: { equals: slug } },
          { property: 'Status', select:    { equals: 'published' } },
        ],
      },
    })
    if (!response.results.length) return null
    const page    = response.results[0]
    const article = mapPageToArticle(page)
    const blocks  = await notion.blocks.children.list({ block_id: page.id })
    article.content     = blocksToHtml(blocks.results)
    article.readingTime = estimateReadingTime(article.content)
    return article
  } catch (error) {
    console.error(`[Notion] getArticleBySlug "${slug}":`, error)
    return null
  }
}

export async function getRecentArticles(limit = 6): Promise<Article[]> {
  const all = await getAllArticles()
  return all.slice(0, limit)
}

export async function getNextPendingKeyword(): Promise<Keyword | null> {
  const notion = await getNotionClient()
  if (!notion || !KEYWORDS_DB) return null
  try {
    const response = await notion.databases.query({
      database_id: KEYWORDS_DB,
      filter:      { property: 'Status', select: { equals: 'pendiente' } },
      sorts:       [{ property: 'Volume', direction: 'descending' }],
      page_size:   1,
    })
    if (!response.results.length) return null
    const page = response.results[0]
    const p    = page.properties as any
    return {
      id:         page.id,
      keyword:    getText(p.Keyword),
      volume:     getText(p.Volume) as number,
      difficulty: getText(p.Difficulty) as number,
      intent:     getText(p.Intent) as Keyword['intent'],
      status:     'pendiente',
    }
  } catch (error) {
    console.error('[Notion] getNextPendingKeyword:', error)
    return null
  }
}

export async function markKeywordAsAssigned(keywordId: string): Promise<void> {
  const notion = await getNotionClient()
  if (!notion) return
  await notion.pages.update({
    page_id:    keywordId,
    properties: { Status: { select: { name: 'asignada' } } },
  })
}
