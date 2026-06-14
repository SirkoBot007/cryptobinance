// ============================================================
// API ROUTE: /api/revalidate
// n8n llama a este endpoint después de publicar un artículo.
// Next.js revalida la caché ISR para que el contenido aparezca.
// ============================================================

import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Token inválido' },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()
    const { slug, type = 'article' } = body

    if (type === 'article' && slug) {
      revalidatePath(`/blog/${slug}`)
      revalidatePath('/blog')
      revalidatePath('/')

      return NextResponse.json({
        revalidated: true,
        paths:       [`/blog/${slug}`, '/blog', '/'],
        timestamp:   new Date().toISOString(),
      })
    }

    if (type === 'all') {
      revalidatePath('/', 'layout')
      return NextResponse.json({
        revalidated: true,
        paths:       ['/ (all)'],
        timestamp:   new Date().toISOString(),
      })
    }

    return NextResponse.json(
      { error: 'Parámetro "slug" o "type" no válido' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
  }
  return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
}
