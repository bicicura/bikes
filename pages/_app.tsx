import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}
