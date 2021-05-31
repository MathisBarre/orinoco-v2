import Seo from '../components/Seo'

export default function Home () {
  return (
    <>
      <Seo
        title="Accueil - Orinoco, votre e-commerce ! Un projet OpenClassrooms"
        description="Le site e-commerce pour vos oursons en peluche ! Un projet OpenClassrooms réalisé par Mathis Barré"
      />
      <ul id="productsList" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
        <div className="bg-oniPink animate-pulse h-80 rounded-md" />
      </ul>
    </>
  )
}
