import React, { FunctionComponent } from 'react';
import NextLink from 'next/link';
import { styled, CSS } from '../stitches.config';
import { VariantProps } from '@stitches/react';

const LinkInner = styled('a', {
  padding: '8px 16px',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    color: {
      dark: {
        color: '$blue-30',
      },
      light: {
        color: '$blue-10',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },

  defaultVariants: {
    color: 'dark',
    size: 2,
  },
});

type LinkProps = {
  href: string;
  css?: CSS;
} & VariantProps<typeof LinkInner>;

export const Link: FunctionComponent<LinkProps> = ({ href, children, css, ...variants }) => {
  return (
    <NextLink href={href} passHref>
      <LinkInner {...variants} css={css}>
        {children}
      </LinkInner>
    </NextLink>
  );
};
