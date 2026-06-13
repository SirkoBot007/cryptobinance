/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes: dominios permitidos
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.notion.so' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com' },
    ],
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  // Redirects para SEO (variantes de URL)
  async redirects() {
    return [
      {
        source: '/binance',
        destination: '/como-registrarse-en-binance',
        permanent: true,
      },
      {
        source: '/registro',
        destination: '/como-registrarse-en-binance',
        permanent: true,
      },
      {
        source: '/bono',
        destination: '/bono-binance-nuevo-usuario',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
