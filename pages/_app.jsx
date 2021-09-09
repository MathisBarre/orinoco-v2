import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import Seo from '../components/Seo'
import DevsCoffeeBanner from '../components/DevsCoffeeBanner'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive'
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
        <header className="flex items-center justify-between w-full px-6 py-2 rounded-lg bg-oniPink">
          <Link href="/"><a><img className="h-20 bg-oniPink" src="/images/logo.png" alt="Orinico" /></a></Link>
          <nav className="flex">
            <ul className="font-semibold list-none">
              <li>
                <Link href="/cart" ><a className="px-4 py-4">Panier</a></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>

    </>
  )
}

export default MyApp
