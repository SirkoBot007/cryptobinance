import { CTAButton }                    from '@/components/ui/CTAButton'
import { generateMetadata as genMeta }  from '@/lib/metadata'
import { breadcrumbSchema, faqSchema }  from '@/lib/schema'
import { AFFILIATE_CODE }               from '@/lib/constants'
import type { Metadata }                from 'next'

export const metadata: Metadata = genMeta({
  title:       'Bono Binance Nuevo Usuario 2026 — Cómo activarlo',
  description: `Consigue el bono de bienvenida de Binance para nuevos usuarios con el código de referido ${AFFILIATE_CODE}. Descuentos en comisiones y recompensas exclusivas.`,
  path:        '/bono-binance-nuevo-usuario',
})

const bonos = [
  {
    icon:  '🎁',
    title: 'Bono de bienvenida',
    desc:  'Binance ofrece recompensas periódicas a los nuevos usuarios que se registran con un código de referido. El importe varía según las promociones activas.',
    badge: 'Disponible',
  },
  {
    icon:  '💸',
    title: 'Descuento en comisiones',
    desc:  'Al usar nuestro código de referido puedes acceder a descuentos especiales en las comisiones de trading durante los primeros meses.',
    badge: 'Automático',
  },
  {
    icon:  '🏆',
    title: 'Programa de recompensas',
    desc:  'Completa tareas como tu primer depósito o primera operación para desbloquear recompensas adicionales en tu cuenta.',
    badge: 'Por tareas',
  },
]

const faqs = [
  {
    question: '¿Cómo activo el bono de nuevo usuario de Binance?',
    answer: `Solo tienes que registrarte usando nuestro enlace de referido (con el código ${AFFILIATE_CODE}). El bono se aplica automáticamente al crear la cuenta. No es posible añadir el código después del registro.`,
  },
  {
    question: '¿Cuánto vale el bono de bienvenida de Binance?',
    answer: 'El valor del bono varía según las promociones activas en cada momento. Binance actualiza frecuentemente sus ofertas para nuevos usuarios. Regístrate ahora para ver las recompensas disponibles actualmente.',
  },
  {
    question: '¿Cuándo recibiré el bono?',
    answer: 'Algunos bonos se acreditan inmediatamente tras el registro. Otros requieren completar el KYC o realizar tu primer depósito. Te lo indican en el apartado "Recompensas" de tu cuenta.',
  },
  {
    question: '¿El bono tiene fecha de caducidad?',
    answer: 'Sí. Las recompensas de Binance suelen tener un período de validez. Una vez recibidas debes usarlas dentro del plazo indicado en los términos de cada promoción.',
  },
]

export default function BonoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Inicio', href: '/' },{ name: 'Bono Binance nuevo usuario', href: '/bono-binance-nuevo-usuario' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="section bg-hero-gradient border-b border-brand-border">
        <div className="container-main max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Bono Binance <span className="text-gradient">Nuevo Usuario</span></h1>
          <CTAButton size="lg" source="bono-hero">Reclamar bono ahora — registro gratis</CTAButton>
        </div>
      </section>
      <section className="section">
        <div className="container-main max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {bonos.map((b) => (<div key={b.title} className="card text-center"><div className="text-4xl mb-3">{b.icon}</div><h3 className="font-bold mb-2">{b.title}</h3><p className="text-brand-muted text-sm">{b.desc}</p></div>))}
          </div>
          <div className="space-y-4">
            {faqs.map((f,i) => (<div key={i} className="card"><h3 className="font-semibold mb-2">{f.question}</h3><p className="text-brand-muted text-sm">{f.answer}</p></div>))}
          </div>
        </div>
      </section>
    </>
  )
}
