import React, { FunctionComponent } from 'react';
import { Menu } from '../components/Menu';
import { styled } from '../stitches.config';

const Background = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: 32,
  flexGrow: 999,
});

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Background>
      <Menu />
      <Main>{children}</Main>
    </Background>
  );
};
