import { CTAButton } from '@/components/ui/CTAButton'

const steps = [
  {
    number: '01',
    title:  'Crea tu cuenta gratuita',
    description:
      'Haz clic en el botón de abajo y accede al formulario de registro de Binance. Solo necesitas tu email o número de teléfono.',
    icon: '📧',
  },
  {
    number: '02',
    title:  'Verifica tu identidad (KYC)',
    description:
      'Sube una foto de tu DNI o pasaporte para cumplir con la regulación. El proceso tarda entre 5 y 15 minutos.',
    icon: '🪪',
  },
  {
    number: '03',
    title:  'Realiza tu primer depósito',
    description:
      'Ingresa fondos con tarjeta, transferencia bancaria o P2P. Puedes empezar desde tan solo 10€.',
    icon: '💰',
  },
  {
    number: '04',
    title:  '¡Compra tu primera cripto!',
    description:
      'Ya puedes comprar Bitcoin, Ethereum, BNB y más de 350 criptomonedas con bajas comisiones.',
    icon: '🚀',
  },
]

export function HowToSection() {
  return (
    <section className="section bg-brand-card/30">
      <div className="container-main">
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge mb-4">Guía rápida</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Cómo <span className="text-gradient">registrarte en Binance</span>
            <br />en 4 pasos
          </h2>
          <p className="text-brand-muted text-lg">
            El proceso completo lleva menos de 20 minutos. Te guiamos paso a paso.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Línea conectora (desktop) */}
          <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b
                          from-brand-yellow via-brand-border to-transparent
                          hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-6 items-start card hover:border-brand-yellow/40"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Número / icono */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl
                                bg-brand-yellow/10 border border-brand-yellow/20
                                flex flex-col items-center justify-center">
                  <span className="text-2xl leading-none">{step.icon}</span>
                  <span className="text-xs font-bold text-brand-yellow">{step.number}</span>
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-brand-text mb-1">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <CTAButton size="lg" source="howto-section">
            Empezar ahora — es gratis
          </CTAButton>
          <p className="text-xs text-brand-muted mt-3">
            Sin tarjeta de crédito requerida para el registro
          </p>
        </div>
      </div>
    </section>
  )
}
