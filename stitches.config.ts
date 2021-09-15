import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    fonts: {
      inter: 'Inter, sans-serif',
    },
    colors: {
      black: 'black',
      white: 'white',
      'blue-10': '#EBF7FFFF',
      'blue-20': '#5fa8d3ff',
      'blue-30': '#1b4965ff',
    },
    fontWeights: {
      regular: 300,
      bold: 700,
    },
    fontSizes: {
      root: '16px',
      1: '0.85rem',
      2: '$root',
      3: '1.15rem',
    },
    shadows: {
      10: '0 1px 3px hsla(0,0%,0%,0.2)',
    },
  },
});
