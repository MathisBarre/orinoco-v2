import Link from 'next/link'

export default function Header () {
  return (
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
  )
}
