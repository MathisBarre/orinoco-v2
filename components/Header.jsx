import Link from 'next/link'
import { ShoppingCartIcon, HomeIcon } from '@heroicons/react/solid'

export default function Header () {
  return (
    <header className="flex items-center justify-between w-full px-6 py-2 rounded-lg bg-oniPink">
      <Link href="/"><a><img className="h-20 bg-oniPink" src="/images/logo.png" alt="Orinico" /></a></Link>
      <nav className="flex">
        <ul className="flex font-semibold list-none">
          <li>
            <Link href="/" >
              <a className="flex items-center px-6 py-3 text-lg font-bold uppercase transition duration-75 rounded hover:bg-white/50">
                <HomeIcon className="w-5 h-5 mr-2" />
                <span>Accueil</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cart" >
              <a className="flex items-center px-6 py-3 text-lg font-bold uppercase transition duration-75 rounded hover:bg-white/50">
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                <span>Panier</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
