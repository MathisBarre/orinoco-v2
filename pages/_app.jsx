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
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center rounded-lg w-full bg-oniPink py-2 px-6">
          <a href="/"><img className="h-20 bg-oniPink" src="./images/logo.png" alt="Orinico" /></a>
          <nav className="flex">
            <ul className="list-none font-semibold">
              <li>
                <a className="px-4 py-4" href="./cart.html">Panier</a>
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
