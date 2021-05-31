import Link from 'next/link'

export default function OrderStatus () {
  return (
    <main className="w-full bg-oniPink rounded-lg my-4 py-16 flex justify-center flex-col">
      <p className="text-center text-4xl font-bold mb-4">Félicitation, votre commande à bien été prise en compte !</p>
      <p className="text-center text-xl mb-4">Identifiant de votre commande : <span className="font-bold" id="commandId" >FAUSSE-COMMANDE159468531</span></p>
      <Link href="/"><a className="inline-block text-center mx-auto bg-indigo-600 py-2 px-4 font-semibold rounded text-white">Retourner à l&apos;accueil</a></Link>
    </main>
  )
}
