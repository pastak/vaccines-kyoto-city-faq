import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'

import '../index.css';
import '../App.css';
import '../FAQList.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)</title>
    </Head>
    <Component {...pageProps} />
  </>
};
export default App;
