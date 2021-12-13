import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './_layout'
import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default MyApp
