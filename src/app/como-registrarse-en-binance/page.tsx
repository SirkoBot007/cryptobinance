import { CTAButton, InlineCTAButton } from '@/components/ui/CTAButton'
import { generateMetadata as genMeta }  from '@/lib/metadata'
import { howToSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title:       'Cómo registrarse en Binance — Guía paso a paso 2026',
  description: 'Aprende a crear tu cuenta en Binance en menos de 10 minutos. Guía actualizada con capturas de pantalla, verificación KYC y cómo activar tu bono de bienvenida.',
  path:        '/como-registrarse-en-binance',
})

const steps = [
  {
    name:  'Accede al formulario de registro',
    text:  'Haz clic en el enlace de registro con código de referido para acceder al formulario oficial de Binance. Introduce tu dirección de email o número de teléfono móvil.',
  },
  {
    name:  'Crea una contraseña segura',
    text:  'Elige una contraseña de al menos 8 caracteres que combine letras mayúsculas, minúsculas, números y símbolos. Guárdala en un gestor de contraseñas.',
  },
  {
    name:  'Verifica tu email',
    text:  'Binance te enviará un código de verificación de 6 dígitos al email que indicaste. Introdúcelo en la pantalla de verificación.',
  },
  {
    name:  'Completa el KYC (verificación de identidad)',
    text:  'Para poder depositar y retirar fondos necesitas verificar tu identidad. Sube una foto de tu DNI o pasaporte (ambas caras) y un selfie. El proceso es automático y tarda entre 5 y 15 minutos.',
  },
  {
    name:  'Activa la autenticación 2FA',
    text:  'Por seguridad, activa la autenticación de dos factores con Google Authenticator o la app de Binance. Es el paso más importante para proteger tu cuenta.',
  },
  {
    name:  '¡Ya puedes depositar y operar!',
    text:  'Realiza tu primer depósito con tarjeta bancaria (VISA/Mastercard) o transferencia SEPA. Luego ve a "Mercados" y compra tu primera criptomoneda.',
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo tarda el proceso de registro completo?',
    answer: 'El registro del formulario tarda 2-3 minutos. La verificación KYC puede tardar entre 5 minutos y 24 horas dependiendo de la carga del sistema.',
  },
  {
    question: '¿Qué documentos necesito para verificarme en Binance?',
    answer: 'Para residentes en España: DNI o Pasaporte vigente. Para LATAM: pasaporte o documento de identidad nacional según el país. También necesitarás hacer un selfie en tiempo real.',
  },
  {
    question: '¿Puedo usar Binance sin verificación KYC?',
    answer: 'Con cuenta no verificada solo puedes operar con criptomonedas ya depositadas. Para depositar con tarjeta o transferencia bancaria es obligatorio el KYC.',
  },
]

export default function ComoRegistrarsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema({
            name:        'Cómo registrarse en Binance',
            description: 'Guía paso a paso para crear una cuenta en Binance desde España o Latinoamérica',
            steps,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Cómo registrarse en Binance', href: '/como-registrarse-en-binance' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero de la página */}
      <section className="section bg-hero-gradient bg-grid border-b border-brand-border">
        <div className="container-main max-w-4xl text-center">
          <div className="badge mb-4">Guía actualizada 2026</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Cómo registrarse en{' '}
            <span className="text-gradient">Binance</span>
          </h1>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto">
            Guía completa y actualizada para crear tu cuenta en el exchange n±1 del mundo.
            El proceso tarda menos de 10 minutos.
          </p>
          <CTAButton size="lg" source="registro-hero">
            Empezar el registro ahora
          </CTAButton>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section">
        <div className="container-main max-w-3xl">

          {/* Intro */}
          <div className="card mb-8 border-brand-yellow/30">
            <div className="flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold text-brand-text mb-1">Antes de empezar</p>
                <p className="text-brand-muted text-sm">
                  Asegúrate de usar nuestro{' '}
                  <InlineCTAButton source="registro-inline-intro" />
                  {' '}para activar el bono de bienvenida disponible para nuevos usuarios.
                  Una vez registrado <strong>no se puede aplicar el código de referido.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-black mb-6">
            Pasos para crear tu cuenta en Binance
          </h2>

          <div className="space-y-5 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="card">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-yellow
                                  flex items-center justify-center text-brand-bg font-black text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-text mb-1">{step.name}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="card border-brand-yellow/30 text-center p-8 mb-12">
            <h3 className="text-xl font-bold mb-2">¿Listo para crear tu cuenta?</h3>
            <p className="text-brand-muted mb-6 text-sm">
              Usa nuestro enlace para asegurarte de recibir el bono de bienvenida disponible.
            </p>
            <CTAButton size="md" source="registro-cta-central">
              Registrarse en Binance gratis
            </CTAButton>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-brand-text mb-2">{faq.question}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-brand-muted border-t border-brand-border pt-6">
            <strong>Aviso de riesgo:</strong> Las criptomonedas son activos de alto riesgo y
            alta volatilidad. El valor de tu inversión puede bajar o subir significativamente.
            Este contenido es informativo y no constituye asesoramiento financiero.
            Invierte solo lo que puedas permitirte perder.
          </div>
        </div>
      </article>
    </>
  )
}
