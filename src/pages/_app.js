import '@/styles/globals.css'
import { Raleway } from 'next/font/google'

const roboto = Raleway({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} scroll-smooth`}>
      <Component {...pageProps} />
    </main>
  ) 
}
