const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        primary: {
          100: '#FFF1DB',
          400: '#BAA88D',
          600: '#6E5F48',
          700: '#584c3a',
          800: '#42392b',
        },
        secondary: {
          200: '#b5b7d6',
          400: '#8487BA',
          600: '#484A6E',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus-visible'])
    }),
  ],
}
