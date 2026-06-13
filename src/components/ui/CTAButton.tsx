// CTAButton.tsx — Botón de afiliado centralizado
import { AFFILIATE_LINK_UTM } from '@/lib/constants'

interface CTAButtonProps {
  children:  React.ReactNode
  size?:     'sm' | 'md' | 'lg'
  source?:   string
  className?: string
  showArrow?: boolean
}

export function CTAButton({ children, size = 'md', source = 'generic', className = '', showArrow = true }: CTAButtonProps) {
  const href = `${AFFILIATE_LINK_UTM}&utm_content=${source}`
  const sz = { sm: 'px-4 py-2 text-sm rounded-lg', md: 'px-6 py-3 text-base rounded-xl', lg: 'px-8 py-4 text-lg rounded-2xl' }[size]
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored"
      className={`inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-bg font-bold transition-all duration-200 active:scale-95 ${sz} ${className}`}>
      {children}
      {showArrow && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>}
    </a>
  )
}

export function InlineCTAButton({ source = 'inline' }: { source?: string }) {
  const href = `${AFFILIATE_LINK_UTM}&utm_content=${source}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="text-brand-yellow font-semibold hover:underline">Registrarse en Binance gratis</a>
  )
}
