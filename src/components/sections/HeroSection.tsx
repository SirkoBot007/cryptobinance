import { CTAButton } from '@/components/ui/CTAButton'
import { BINANCE_STATS, TELEGRAM_CHANNEL } from '@/lib/constants'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container-main section relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-slow" />
            Programa oficial de referidos Binance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Empieza a invertir e{' '}<span className="text-gradient">criptomonedas</span><br />con el exchange nº1 del mundo
          </h1>
          <p className="text-lg text-brand-muted mb-8 max-w-2xl mx-auto">
            Guías para abrir tu cuenta en Binance y aprovechar los bonos de bienvenida en España y LATAM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton size="lg" source="hero-primary">Abrir cuenta en Binance gratis</CTAButton>
            <Link href="/como-registrarse-en-binance" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-brand-border text-brand-muted hover:border-brand-yellow hover:text-brand-yellow transition-all">Ver guía paso a paso</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: 'Usuarios activos', value: BINANCE_STATS.users },{ label: 'Países', value: BINANCE_STATS.countries },{ label: 'Volumen 24h', value: BINANCE_STATS.volume24h },{ label: 'Criptomonedas', value: BINANCE_STATS.cryptos }].map((s) => (
              <div key={s.label} className="card text-center py-4"><div className="text-xl font-black text-brand-yellow mb-1">{s.value}</div><div className="text-xs text-brand-muted">{s.label}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
