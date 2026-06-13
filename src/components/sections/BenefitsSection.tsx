const benefits = [{ icon: '🔒', title: 'Máxima seguridad', desc: 'Fondo SAFU, 2FA y cold wallets.' },{ icon: '💸', title: 'Comisiones mínimas', desc: 'Solo 0.1% en spot, reducible al 0.075% con BNB.' },{ icon: '📊', title: '+350 criptomonedas', desc: 'BTC, ETH, BNB, Solana, XRP y cientos más.' },{ icon: '🌍', title: 'España y LATAM', desc: 'Depósitos en EUR, MXN, ARS. Soporte en español 24/7.' },{ icon: '📱', title: 'App top-rated', desc: 'Mas de 50M de descargas.' },{ icon: '🎁', title: 'Bonos para nuevos usuarios', desc: 'Aprovecha los bonos de bienvenida con nuestro enlace.' }]

export function BenefitsSection() {
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-black text-center mb-14">El exchange favorito de <span className="text-gradient">240 millones de personas</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (<div key={b.title} className="card"><div className="text-3xl mb-3">{b.icon}</div><h3 className="font-bold mb-2">{b.title}</h3><p className="text-brand-muted text-sm">{b.desc}</p></div>))}
        </div>
      </div>
    </section>
  )
}
