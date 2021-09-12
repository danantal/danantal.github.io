import React from 'react';
import { css, styled } from '../stitches.config';
import { Link } from './Link';

const Nav = styled('nav', {
  position: 'fixed',
  top: 0,
  display: 'flex',
  width: '100vw',
  height: '64px',
});

export const Menu = () => {
  return (
    <Nav>
      <ul
        className={css({
          display: 'flex',
          flex: '1 0 auto',
          alignItems: 'center',
          padding: '0 16px',
          justifyContent: 'flex-end',
          boxShadow: '$10',
          backgroundColor: '$blue-10',
        })()}
      >
        <li>
          <Link href="/" size={3}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" size={3}>
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
