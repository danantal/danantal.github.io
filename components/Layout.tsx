import React, { FunctionComponent } from 'react';
import { Menu } from '../components/Menu';
import { styled } from '../stitches.config';

const Background = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: 'url(./background.svg)',
  backgroundSize: 'cover',
});

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Background>
      <Menu />
      <main>{children}</main>
    </Background>
  );
};
