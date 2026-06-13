import { HeroSection } from '@/components/sections/HeroSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { HowToSection } from '@/components/sections/HowToSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTAButton } from '@/components/ui/CTAButton'
import { faqData } from '@/components/sections/FAQSection'
import { faqSchema } from '@/lib/schema'
import { generateMetadata as genMeta } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Guía completa para invertir en criptomonedas con Binance',
  description: 'Aprende a abrir tu cuenta en Binance y aprovecha el bono de bienvenida. Guía para principiantes.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }} />
      <HeroSection />
      <BenefitsSection />
      <HowToSection />
      <FAQSection />
      <section className="section bg-hero-gradient border-t border-brand-border">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">·Listo para empezar?</h2>
          <CTAButton size="lg" source="home-footer-cta">Crear cuenta gratuita en Binance</CTAButton>
        </div>
      </section>
    </>
  )
}
