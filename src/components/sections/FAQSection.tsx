'use client'

import { useState } from 'react'

// Estas preguntas están elegidas por volumen de búsqueda SEO
export const faqData = [
  {
    question: '¿Es seguro registrarse en Binance?',
    answer:
      'Sí. Binance es el exchange de criptomonedas con mayor volumen del mundo y opera desde 2017. Dispone del Fondo SAFU (Secure Asset Fund for Users) con 1.000M$ de reservas para proteger a los usuarios en caso de incidentes de seguridad. Además implementa autenticación de dos factores (2FA), encriptación avanzada y almacena la mayoría de fondos en cold wallets offline.',
  },
  {
    question: '¿Puedo registrarme en Binance desde España?',
    answer:
      'Sí. Binance opera legalmente en España y está registrada como Proveedor de Servicios de Activos Virtuales (PSAV) ante el Banco de España. Puedes depositar en euros mediante transferencia SEPA o tarjeta de débito/crédito sin problemas.',
  },
  {
    question: '¿Cuánto dinero necesito para empezar en Binance?',
    answer:
      'El registro es totalmente gratuito. Para empezar a operar puedes depositar desde 10€ mediante tarjeta o transferencia bancaria. No hay ningún mínimo obligatorio para abrir la cuenta.',
  },
  {
    question: '¿Qué es el bono de bienvenida de Binance?',
    answer:
      'Binance ofrece periódicamente bonos para nuevos usuarios que se registran con un código de referido. Los bonos pueden incluir descuentos en comisiones o recompensas al realizar determinadas operaciones. Regístrate con nuestro enlace para acceder a las ofertas disponibles actualmente.',
  },
  {
    question: '¿Tengo que pagar impuestos por las criptomonedas en España?',
    answer:
      'Sí. En España las ganancias obtenidas por la venta de criptomonedas tributan como ganancias patrimoniales en el IRPF (entre 19% y 26% según el importe). Además existe la obligación de declarar activos en el extranjero superiores a 50.000€ mediante el modelo 721. Te recomendamos consultar con un asesor fiscal especializado en crypto.',
  },
  {
    question: '¿Cómo compro Bitcoin en Binance por primera vez?',
    answer:
      'Es muy sencillo: 1) Crea tu cuenta gratis, 2) Verifica tu identidad (KYC) subiendo tu DNI, 3) Deposita fondos con tarjeta o transferencia SEPA, 4) Ve a "Comprar crypto" y selecciona Bitcoin (BTC). El proceso completo no lleva más de 20 minutos.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section bg-brand-card/20">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-brand-muted">
            Todo lo que necesitas saber antes de empezar con Binance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`card cursor-pointer transition-all duration-300
                ${open === i ? 'border-brand-yellow/50' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-brand-text text-left">{faq.question}</h3>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-border
                                flex items-center justify-center transition-transform duration-300
                                ${open === i ? 'rotate-45 border-brand-yellow text-brand-yellow' : 'text-brand-muted'}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              {open === i && (
                <p className="mt-3 text-brand-muted leading-relaxed text-sm pt-3 border-t border-brand-border">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
