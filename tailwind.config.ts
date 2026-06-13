import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta CryptoBinance — inspirada en Binance dark mode
        brand: {
          yellow:  '#F0B90B',  // Binance gold — CTAs, acentos
          'yellow-dark': '#C99A08',
          bg:      '#0B0E11',  // Fondo principal
          card:    '#1E2026',  // Tarjetas y secciones
          border:  '#2B2F36',  // Borders sutiles
          text:    '#EAECEF',  // Texto principal
          muted:   '#848E9C',  // Texto secundario
          green:   '#02C076',  // Positivo / ganancias
          red:     '#F6465D',  // Negativo / advertencia
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B0E11 0%, #1a1f2e 50%, #0B0E11 100%)',
        'card-gradient': 'linear-gradient(135deg, #1E2026 0%, #252930 100%)',
        'cta-gradient':  'linear-gradient(135deg, #F0B90B 0%, #C99A08 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
