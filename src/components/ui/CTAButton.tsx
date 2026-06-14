// ============================================================
// CTAButton.tsx — Botón de afiliado centralizado
// TODA la conversión pasa por este componente.
// El enlace se toma de constants.ts — nunca hardcoded.
// ============================================================

import { AFFILIATE_LINK_UTM } from '@/lib/constants'

interface CTAButtonProps {
  children:  React.ReactNode
  size?:     'sm' | 'md' | 'lg'
  source?:   string                // Para tracking UTM por posición
  className?: string
  showArrow?: boolean
}

export function CTAButton({
  children,
  size      = 'md',
  source    = 'generic',
  className = '',
  showArrow = true,
}: CTAButtonProps) {
  // UTM tracking por posición del CTA
  const href = `${AFFILIATE_LINK_UTM}&utm_content=${source}`

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`
        inline-flex items-center justify-center gap-2
        bg-brand-yellow hover:bg-brand-yellow-dark
        text-brand-bg font-bold
        transition-all duration-200 active:scale-95
        shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/30
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
      {showArrow && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </a>
  )
}

/** Versión inline para usar dentro de texto de artículos */
export function InlineCTAButton({ source = 'inline' }: { source?: string }) {
  const href = `${AFFILIATE_LINK_UTM}&utm_content=${source}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center gap-1 text-brand-yellow font-semibold
                 hover:underline underline-offset-2"
    >
      Registrarse en Binance gratis
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
