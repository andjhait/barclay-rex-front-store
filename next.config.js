const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA(withImages({
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  inlineImageLimit: 16384,
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development'
      },
  webpack(config, options) {
    return config
  }
}));