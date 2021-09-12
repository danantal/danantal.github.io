import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { globalCss, styled } from '../stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$inter',
  },

  li: {
    listStyle: 'none',
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
