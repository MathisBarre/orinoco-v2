import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Link from 'next/link'
import Seo from '../components/Seo'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" /></Head>
      <Seo
        title="Orinoco, votre e-commerce ! Un projet OpenClassrooms"
        description="Le site e-commerce pour vos oursons en peluche ! Projet 5 du parcours développeur web chez OpenClassrooms réalisé par Mathis Barré"
        imageUrl="https://orinoco-v2.mathisbarre.com/images/orinoco.png"
      />
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center rounded-lg w-full bg-oniPink py-2 px-6">
          <Link href="/"><a><img className="h-20 bg-oniPink" src="/images/logo.png" alt="Orinico" /></a></Link>
          <nav className="flex">
            <ul className="list-none font-semibold">
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
