'use client'

import { useState } from 'react'

export const faqData = [{ question: '¿Es seguro registrarse en Binance?', answer: 'Sí. Binance es el exchange con mayor volumen del mundo y opera desde 2017. Dispone del Fondo SAFU con 1.000M$ de reservas.' },{ question: '¿Puedo registrarme en Binance desde España?', answer: 'Sí. Binance opera legalmente en España y está registrada ante el Banco de España. Puedes depositar en euros mediante SEPA U Ctarjeta.' },{ question: '¿Cuánto dinero necesito para empezar?', answer: 'El registro es gratuito. Puedes depositar desde 10€ sin mínimo obligatorio.' },{ question: '¿Qué es el bono de bienvenida?', answer: 'Binance ofrece periódicamente bonos a nuevos usuarios que se registran con un código de referido.' },{ question: '¿Tengo que pagar impuestos por cripto en España?', answer: 'Sí. Las ganancias tributan como ganancias patrimoniales en el IRPF. Consulta con un asesor fiscal de crypto.' }]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-black text-center mb-12">Preguntas <span className="text-gradient">frecuentes</span></h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((f, i) => (
            <div key={i} className="card cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex justify-between"><h3 className="font-semibold">{f.question}</h3><span>{open === i ? '−' : '+'}</span></div>
              {open === i && <p className="mt-3 text-brand-muted text-sm">{f.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
