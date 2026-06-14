import { CTAButton } from '@/components/ui/CTAButton'
import { BINANCE_STATS, TELEGRAM_CHANNEL } from '@/lib/constants'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient bg-grid">

      {/* Glow de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96
                        bg-brand-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main section relative">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge de confianza */}
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-slow" />
            Programa oficial de referidos Binance
          </div>

          {/* Headline principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Empieza a invertir en{' '}
            <span className="text-gradient">criptomonedas</span>
            <br />con el exchange nº1 del mundo
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-brand-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Guías completas para abrir tu cuenta en Binance, comprar tu primera
            cripto y aprovechar los bonos de bienvenida disponibles para nuevos usuarios
            en España y Latinoamérica.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton size="lg" source="hero-primary">
              Abrir cuenta en Binance gratis
            </CTAButton>
            <Link
              href="/como-registrarse-en-binance"
              className="btn-secondary text-lg px-8 py-4 rounded-2xl"
            >
              Ver guía paso a paso
            </Link>
          </div>

          {/* Estadísticas de Binance como social proof */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Usuarios activos',    value: BINANCE_STATS.users },
              { label: 'Países disponibles',  value: BINANCE_STATS.countries },
              { label: 'Volumen 24h',         value: BINANCE_STATS.volume24h },
              { label: 'Criptomonedas',       value: BINANCE_STATS.cryptos },
            ].map((stat) => (
              <div key={stat.label} className="card text-center py-4">
                <div className="text-xl sm:text-2xl font-black text-brand-yellow mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-brand-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-brand-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Registro gratuito en 5 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin comisiones ocultas
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Bono de bienvenida disponible
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Comunidad en Telegram
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
