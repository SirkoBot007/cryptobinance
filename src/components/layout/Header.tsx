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

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center">
              <span className="text-brand-bg font-black text-sm">₿</span>
            </div>
            <span className="font-bold text-brand-text group-hover:text-brand-yellow transition-colors">
              {SITE_NAME}
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-brand-muted hover:text-brand-text
                           hover:bs-brand-card rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <CTAButton size="sm" source="header">
              Abrir cuenta gratis
            </CTAButton>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brand-muted hover:text-brand-text"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Nav mobile */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-brand-border space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-brand-muted hover:text-brand-text
                           hover:bg-brand-card rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <CTAButton size="sm" source="header-mobile" className="w-full justify-center">
                Abrir cuenta gratis
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
