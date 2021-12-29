import { createStitches, CSS as StitchesCSS } from '@stitches/react';

export const { styled, css, globalCss, getCssText, config } = createStitches({
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
    sizes: {
      100: '64px',
      200: '96px',
      300: '128px',
      400: '256px',
      500: '384px',
      600: '512px',
      700: '768px',
      800: '960px',
      900: '1280px',
    },
    space: {
      100: '4px',
      200: '8px',
      300: '12px',
      400: '16px',
      500: '24px',
      600: '32px',
      700: '36px',
      800: '48px',
      900: '64px',
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

export type CSS = StitchesCSS<typeof config>;
