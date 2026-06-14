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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Bono Binance nuevo usuario', href: '/bono-binance-nuevo-usuario' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="section bg-hero-gradient bg-grid border-b border-brand-border">
        <div className="container-main max-w-4xl text-center">
          <div className="badge mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-slow inline-block" />
            {' '}Oferta disponible ahora
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Bono Binance{' '}
            <span className="text-gradient">Nuevo Usuario</span>
          </h1>
          <p className="text-xl text-brand-muted mb-4 max-w-2xl mx-auto">
            Regístrate con nuestro código de referido{' '}
            <code className="bg-brand-card px-2 py-0.5 rounded text-brand-yellow font-mono">
              {AFFILIATE_CODE}
            </code>
            {' '}y accede a las recompensas disponibles para nuevos usuarios.
          </p>
          <p className="text-sm text-brand-red mb-8">
            ⚠️ El código de referido solo puede aplicarse durante el registro. No se puede añadir después.
          </p>
          <CTAButton size="lg" source="bono-hero">
            Reclamar bono ahora — registro gratis
          </CTAButton>
        </div>
      </section>

      {/* Tipos de bono */}
      <section className="section">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
            ¿Qué incluye el bono?
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {bonos.map((b) => (
              <div key={b.title} className="card text-center">
                <div className="text-4xl mb-3">{b.icon}</div>
                <div className="badge-green text-xs mb-3">{b.badge}</div>
                <h3 className="font-bold text-brand-text mb-2">{b.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Cómo activarlo */}
          <div className="card border-brand-yellow/30 mb-12">
            <h2 className="text-xl font-black mb-6">Cómo activar el bono en 3 pasos</h2>
            <div className="space-y-4">
              {[
                { n: '1', t: 'Usa nuestro enlace de registro', d: 'Haz clic en el botón de abajo. El código de referido se aplica automáticamente al acceder desde nuestro enlace.' },
                { n: '2', t: 'Completa el registro y el KYC', d: 'Crea tu cuenta con email, crea una contraseña segura y verifica tu identidad subiendo tu DNI.' },
                { n: '3', t: 'Revisa tus recompensas', d: 'En tu cuenta de Binance ve a Perfil → Centro de recompensas para ver y reclamar tus bonos disponibles.' },
              ].map((s) => (
                <div key={s.n} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center
                                  text-brand-bg font-black text-sm flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">{s.t}</p>
                    <p className="text-brand-muted text-sm">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-brand-border text-center">
              <CTAButton size="md" source="bono-howto">
                Activar bono — registro gratuito
              </CTAButton>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black mb-6">Preguntas frecuentes sobre el bono</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-brand-text mb-2">{faq.question}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-brand-muted border-t border-brand-border pt-6">
            <strong>Nota:</strong> Las condiciones del bono y las recompensas disponibles pueden
            cambiar sin previo aviso. CryptoBinance participa en el programa de referidos de Binance
            y puede recibir una comisión si te registras a través de nuestros enlaces, sin coste
            adicional para ti. Invierte con responsabilidad.
          </div>
        </div>
      </section>
    </>
  )
}
