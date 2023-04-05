// DEPENDENCY
import { createGlobalTheme } from '@vanilla-extract/css'

// THEME
export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',

    gray: {
      100: '#e1e1e6',
      300: '#c4c4cc',
      400: '#8d8d99',
      500: '#7c7c8a',
      600: '#323238',
      700: '#29292e',
      800: '#202024',
      900: '#121214',
    },

    primary: {
      100: '#FFF1DB',
      400: '#BAA88D',
      600: '#6E5F48',
      700: '#584c3a',
      800: '#42392b',
    },

    secondary: {
      400: '#8487BA',
      600: '#484A6E',
    },
  },

  font: {
    family: {
      sans: 'Inter, sans-serif',
    },

    weight: {
      regular: '400',
      bold: '700',
    },
  },
})
