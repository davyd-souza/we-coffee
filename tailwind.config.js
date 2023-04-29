const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        brand: 'Montserrat, sans-serif',
      },
      colors: {
        primary: {
          100: '#FFF1DB',
          400: '#BAA88D',
          600: '#6E5F48',
          700: '#584c3a',
          800: '#42392b',
        },
        // primary: {
        //   100: '#cbbcb1',
        //   200: '#b09a8a',
        //   300: '#967963',
        //   400: '#7c573c',
        //   600: '#634630',
        //   700: '#4a3424',
        //   800: '#322318',
        // },
        secondary: {
          200: '#b5b7d6',
          400: '#8487BA',
          600: '#484A6E',
        },
      },
      gridTemplateColumns: {
        'product-list': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus-visible'])
    }),
  ],
}
