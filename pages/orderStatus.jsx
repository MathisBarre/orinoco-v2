import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function OrderStatus () {
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    const newOrderId = new URL(location.href).searchParams.get('orderId') || 'ERREUR'
    setOrderId(newOrderId)
  }, [])

  return (
    <main className="flex flex-col justify-center w-full py-16 my-4 rounded-lg bg-oniPink">
      <p className="mb-4 text-4xl font-bold text-center">Félicitation, votre commande à bien été prise en compte !</p>
      <p className="mb-4 text-xl text-center">Identifiant de votre commande : <span className="font-bold" id="commandId" >{orderId}</span></p>
      <Link href="/"><a className="inline-block px-4 py-2 mx-auto font-semibold text-center text-white bg-indigo-600 rounded">Retourner à l&apos;accueil</a></Link>
    </main>
  )
}
