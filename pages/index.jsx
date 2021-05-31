import Seo from '../components/Seo'
import getProducts from '../services/getProducts'

export default function Home ({ products }) {
  return (
    <>
    {console.log(products)}
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

export async function getStaticProps () {
  const products = await getProducts()

  return {
    props: {
      products
    }
  }
}
