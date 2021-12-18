import '../styles/global.scss'
import React from 'react'
import 'raf/polyfill'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { DripsyProvider } from 'dripsy'

import { theme } from 'app/theme'
import { Navigation } from 'app/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <DripsyProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation Component={Component} pageProps={pageProps} />
        </SafeAreaProvider>
      </DripsyProvider>
    </>
  )
}
