import React from 'react';
import { AppProps } from 'next/app';

import '../index.css';
import '../App.css';
import '../FAQList.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
