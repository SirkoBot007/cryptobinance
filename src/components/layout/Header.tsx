'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CTAButton } from '@/components/ui/CTAButton'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2"><span className="font-bold">{SITE_NAME}</span></Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (<Link key={l.href} href={l.href} className="px-4 py-2 text-sm text-brand-muted hover:text-brand-text rounded-lg">{l.label}</Link>))}
          </nav>
          <div className="hidden md:block"><CTAButton size="sm" source="header">Abrir cuenta gratis</CTAButton></div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menú">
            <svg className="w6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {menuOpen && <div className="md:hidden py-4">{NAV_LINKS.map((l) => (<Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-brand-muted">{l.label}</Link>))}</div>}
      </div>
    </header>
  )
}
