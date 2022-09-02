/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import MyPovider from '../contexts/MyProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyPovider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MyPovider>
  );
}

export default MyApp;
