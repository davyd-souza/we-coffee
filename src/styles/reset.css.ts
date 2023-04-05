// DEPENDENCY
import { globalStyle } from '@vanilla-extract/css'

/* STYLE RESET */
/* Box sizing rules */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto',
    },
  },
})

/* Remove default margin */
globalStyle('*', {
  margin: 0,
  padding: 0,
  font: 'inherit',
})

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: 'none',
})

/* Set core root defaults */
globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
})

globalStyle('html, body, #root', {
  minHeight: '100%',
  overflowX: 'hidden',
})

/* Set core body defaults and improve text rendering */
globalStyle('body', {
  textRendering: 'optimizeSpeed',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  lineHeight: 1.7,
})

/* A elements that don't have a class get default styles */
globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
})

/* Make images easier to work with */
globalStyle('img, picture, video, canvas, svg', {
  maxWidth: '100%',
  display: 'block',
})

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
globalStyle('', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {},
  },
})
