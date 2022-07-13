import type { AppProps } from 'next/app';
import { LayoutProvider } from '@contexts/Layout';
import Head from 'next/head';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>GRM | Incorporadora</title>
      </Head>
      <LayoutProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutProvider>
    </>
  );
};

export default MyApp;
