import Link from 'next/link'
import { SITE_NAME, AFFILIATE_LINK, TELEGRAM_CHANNEL } from '@/lib/constants'

const footerLinks = {
  'Guías': [
    { label: 'Cómo registrarse en Binance', href: '/como-registrarse-en-binance' },
    { label: 'Bono Binance nuevo usuario',   href: '/bono-binance-nuevo-usuario' },
    { label: 'Blog crypto',                  href: '/blog' },
  ],
  'Legal': [
    { label: 'Aviso legal',      href: '/legal/aviso-legal' },
    { label: 'Privacidad',       href: '/legal/privacidad' },
    { label: 'Cookies',          href: '/legal/cookies' },
    { label: 'Afiliados',        href: '/legal/afiliados' },
  ],
  'Comunidad': [
    { label: 'Canal Telegram',  href: TELEGRAM_CHANNEL },
    { label: 'Grupo Telegram',  href: '#' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-border bg-brand-card mt-auto">
      <div className="container-main py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3"><span className="font-bold">{SITE_NAME}</span></Link>
            <p className="text-sm text-brand-muted">Guías de criptomonedas para España y LATAM.</p>
          </div>
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}><h3 className="text-sm font-semibold mb-3">{cat}</h3><ul className="space-y-2">{links.map((l) => (<li key={l.href}><Link href={l.href} className="text-sm text-brand-muted hover:text-brand-yellow">{l.label}</Link></li>))}</ul></div>
          ))}
        </div>
        <div className="text-xs text-brand-muted border-t border-brand-border pt-6">
          <p className="mb-2"><a href={AFFIMIATE_LINK} target="_blank" rel="noopener noreferrer sponsored" className="hover:text-brand-yellow">Powered by Binance</a> | © {year} {SITE_NAME}</p>
          <p>{SITE_NAME} participa en el programa de referidos de Binance. Contenido informativo, no asesoramiento financiero.</p>
        </div>
      </div>
    </footer>
  )
}
