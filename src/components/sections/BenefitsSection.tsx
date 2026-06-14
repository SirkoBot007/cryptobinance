const benefits = [
  {
    icon:  '🔒',
    title: 'Máxima seguridad',
    desc:  'Fondo SAFU, autenticación 2FA, encriptación avanzada y almacenamiento en cold wallets.',
  },
  {
    icon:  '💸',
    title: 'Comisiones mínimas',
    desc:  'Solo 0.1% de comisión en spot, reducible al 0.075% usando BNB para pagar fees.',
  },
  {
    icon:  '📊',
    title: '+350 criptomonedas',
    desc:  'Accede a Bitcoin, Ethereum, BNB, Solana, XRP y cientos de altcoins en un solo lugar.',
  },
  {
    icon:  '🌍',
    title: 'Disponible en España y LATAM',
    desc:  'Depósitos en EUR, MXN, ARS, COP y más. Soporte en español 24/7.',
  },
  {
    icon:  '📱',
    title: 'App móvil top-rated',
    desc:  'La aplicación mejor valorada del sector con más de 50M de descargas.',
  },
  {
    icon:  '🎁',
    title: 'Bonos para nuevos usuarios',
    desc:  'Aprovecha los bonos de bienvenida disponibles al registrarte con nuestro enlace.',
  },
]

export function BenefitsSection() {
  return (
    <section className="section">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge mb-4">¿Por qué Binance?</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            El exchange favorito de{' '}
            <span className="text-gradient">240 millones de personas</span>
          </h2>
          <p className="text-brand-muted text-lg">
            Desde 2017 liderando el mercado global de criptomonedas por volumen de operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="card group">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-brand-text mb-2 group-hover:text-brand-yellow transition-colors">
                {b.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
