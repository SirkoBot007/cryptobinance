import { CTAButton } from '@/components/ui/CTAButton'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { howToSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Cómo registrarse en Binance — Guía paso a paso 2026',
  description: 'Aprende a crear tu cuenta en Binance en menos de 10 minutos. Guía actualizada con verificación KYC.',
  path: '/como-registrarse-en-binance',
})

const steps = [{ name: 'Accede al formulario', text: 'Haz clic en nuestro enlace de registro y introduce tu email.' },{ name: 'Crea una contraseña', text: 'Elige una contraseña segura de al menos 8 caracteres.' },{ name: 'Verifica tu email', text: 'Introduce el código de 6 dígitos que te enviarán.' },{ name: 'Completa el KYC', text: 'Sube tu DNI� pasaporte y un selfie. El proceso es automático.' },{ name: 'Activa 2FA', text: 'Activa la autenticación de dos factores.' },{ name: '¡Ya puedes operar!', text: 'Realiza tu primer depósito y compra cripto.' }]
const faqs = [{ question: '¿Cuánto tiempo tarda el registro?', answer: 'El registro tarda 2-3 minutos. El KYC puede tardar de 5 minutos a 24 horas.' },{ question: '¿Qué documentos necesito?', answer: 'DNI o pasaporte vigente y selfie.' }]

export default function ComoRegistrarsePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ name: 'Còmo registrarse en Binance', description: 'Guía paso a paso', steps })) }} />
      <section className="section bg-hero-gradient border-b border-brand-border">
        <div className="container-main max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Cómo registrarse en{{' '}}<span className="text-gradient">Binance</span></h1>
          <CTAButton size="lg" source="registro-hero">Empezar el registro ahora</CTAButton>
        </div>
      </section>
      <article className="section">
        <div className="container-main max-w-3xl">
          <div className="space-y-5 mb-12">
            {steps.map((s,i) => (<div key={i} className="card"><div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-bg font-black text-sm">{i+1}</div><div><h3 className="font-bold mb-1">{s.name}</h3><p className="text-brand-muted text-sm">{s.text}</p></div></div></div>))}
          </div>
          <div className="space-y-4">
            {faqs.map((f,i) => (<div key={i} className="card"><h3 className="font-semibold mb-2">{f.question}</h3><p className="text-brand-muted text-sm">{f.answer}</p></div>))}
          </div>
        </div>
      </article>
    </>
  )
}
