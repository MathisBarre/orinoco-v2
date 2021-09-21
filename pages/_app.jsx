import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'
import Head from 'next/head'
import splitbee from '@splitbee/web'
import Seo from '../components/Seo'
import DevsCoffeeBanner from '../components/DevsCoffeeBanner'
import Header from '../components/Header'
import BasketWrapper from '../components/BasketContext'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
      token: 'PRBWDOI08IWS'
    })
  }, [])

  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" /></Head>
      <Seo
        title="Orinoco, votre e-commerce ! Un projet OpenClassrooms"
        description="Le site e-commerce pour vos oursons en peluche ! Projet 5 du parcours développeur web chez OpenClassrooms réalisé par Mathis Barré"
        imageUrl="https://orinoco-v2.mathisbarre.com/images/orinoco.png"
      />
      <DevsCoffeeBanner />
      <div className="container px-4 py-8 mx-auto">
        <Header/>
        <BasketWrapper>
          <Component {...pageProps} />
        </BasketWrapper>
      </div>
    </>
  )
}

export default MyApp
