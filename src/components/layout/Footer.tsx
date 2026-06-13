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

        {/* Grid de links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-brand-yellow flex items-center justify-center">
                <span className="text-brand-bg font-black text-xs">₿</span>
              </div>
              <span className="font-bold text-brand-text">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed">
              Guías y tutoriales de criptomonedas para España y Latinoamérica.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-brand-text mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted hover:text-brand-yellow transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mb-6" />

        {/* Disclaimer de afiliado — OBLIGATORIO legalmente */}
        <div className="bg-brand-bg rounded-xl p-4 mb-6 border border-brand-border">
          <p className="text-xs text-brand-muted leading-relaxed">
            <strong className="text-brand-text">Divulgación de afiliado:</strong>{' '}
            {SITE_NAME} participa en el programa de referidos de Binance. Si te registras
            usando nuestros enlaces, podemos recibir una comisión sin coste adicional para ti.
            El contenido de este sitio es únicamente informativo y no constituye asesoramiento
            financiero. Invertir en criptomonedas conlleva riesgos significativos.
            Invierte solo lo que puedas permitirte perder.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-muted">
          <p>© {year} {SITE_NAME}. Todos los derechos reservados.</p>
          <p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hover:text-brand-yellow transition-colors"
            >
              Powered by Binance ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
