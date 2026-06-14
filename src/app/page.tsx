import { HeroSection }    from '@/components/sections/HeroSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { HowToSection }    from '@/components/sections/HowToSection'
import { FAQSection }      from '@/components/sections/FAQSection'
import { CTAButton }       from '@/components/ui/CTAButton'
import { faqData }         from '@/components/sections/FAQSection'
import { faqSchema }       from '@/lib/schema'
import { generateMetadata as genMeta } from '@/lib/metadata'
import type { Metadata }   from 'next'

export const metadata: Metadata = genMeta({
  title:       'Guía completa para invertir en criptomonedas con Binance',
  description: 'Aprende a abrir tu cuenta en Binance, comprar Bitcoin y aprovecha el bono de bienvenida. Guía paso a paso para principiantes en España y Latinoamérica.',
  path:        '/',
})

export default function HomePage() {
  return (
    <>
      {/* Schema FAQ para rich snippets en Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />

      <HeroSection />
      <BenefitsSection />
      <HowToSection />
      <FAQSection />

      {/* CTA final — sticky bottom bar en mobile */}
      <section className="section bg-hero-gradient border-t border-brand-border">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Únete a más de 240 millones de personas que ya invierten en
            criptomonedas con Binance. El registro es gratuito y tarda 5 minutos.
          </p>
          <CTAButton size="lg" source="home-footer-cta">
            Crear cuenta gratuita en Binance
          </CTAButton>
        </div>
      </section>
    </>
  )
}
