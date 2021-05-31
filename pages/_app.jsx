import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Seo from '../components/Seo'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" /></Head>
      <Seo
        title="Orinoco, votre e-commerce ! Un projet OpenClassrooms"
        description="Le site e-commerce pour vos oursons en peluche ! Un projet OpenClassrooms réalisé par Mathis Barré"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
