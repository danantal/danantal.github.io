import React from 'react';
import { css, styled } from '../stitches.config';
import { Link } from './Link';

const Nav = styled('nav', {
  display: 'flex',
  width: '100vw',
  height: 80,
});

export const Menu = () => {
  return (
    <Nav>
      <ul
        className={css({
          display: 'flex',
          flexGrow: 999,
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '$10',
          backgroundColor: '$blue-30',
          letterSpacing: 3,
        })()}
      >
        <li>
          <Link href="/" color="light" size={3}>
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link href="/contact" color="light" size={3}>
            CONTACT
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
