import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Urbanist } from '@next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  )
}
