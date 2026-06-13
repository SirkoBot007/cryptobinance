// ============================================================
// CONSTANTS.TS — Fuente de verdad absoluta del proyecto
// Si cambias el enlace de afiliado, cámbialo SOLO aquí.
// ============================================================

// --- AFILIADO BINANCE ---
export const AFFILIATE_LINK = 'https://www.binance.com/register?ref=PQVNN4YQ'
export const AFFILIATE_CODE = 'PQVNN4YQ'
export const AFFILIATE_LINK_UTM = `${AFFILIATE_LINK}&utm_source=cryptobinance&utm_medium=web&utm_campaign=referral`

// --- SITE ---
export const SITE_URL    = process.env.NEXT_PUBLIC_SITE_URL || 'https://cryptobinance.vercel.app'
export const SITE_NAME   = 'CryptoBinance'
export const SITE_TAGLINE = 'Tu guía de confianza para invertir en criptomonedas'
export const SITE_DESCRIPTION =
  'Aprende a invertir en criptomonedas con Binance. Guías completas, tutoriales paso a paso y análisis para principiantes en España y Latinoamérica.'

// --- REDES SOCIALES ---
export const TELEGRAM_CHANNEL = 'https://t.me/cryptobinance_es' // actualizar cuando se cree
export const TELEGRAM_GROUP   = 'https://t.me/cryptobinance_grupo'

// --- BINANCE DATA (para mostrar en la web como social proof) ---
export const BINANCE_STATS = {
  users:       '240 millones',
  countries:   '+180',
  volume24h:   '+65.000M$',
  cryptos:     '+350',
  founded:     '2017',
  established: 'Exchange nº1 del mundo por volumen',
}

// --- NAVEGACIÓN ---
export const NAV_LINKS = [
  { label: 'Inicio',       href: '/' },
  { label: 'Guía Binance', href: '/como-registrarse-en-binance' },
  { label: 'Bono',         href: '/bono-binance-nuevo-usuario' },
  { label: 'Blog',         href: '/blog' },
]

// --- REVALIDACIÓN ISR ---
export const REVALIDATE_SECONDS = 3600 // 1 hora — los artículos del blog se revalidan cada hora
