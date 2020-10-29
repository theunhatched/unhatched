const tailwindTypography = require('@tailwindcss/typography')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        arapawa: '#0d1c66',
        pink: '#f0a3a1',
        ballerina: '#ffd7d7',
      },
    },
  },
  variants: {},
  plugins: [tailwindTypography],
}
