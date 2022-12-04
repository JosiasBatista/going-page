import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}
