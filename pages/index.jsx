import Link from 'next/link'
import Seo from '../components/Seo'
import getProducts from '../services/getProducts'

export default function Home ({ products }) {
  return (
    <>
      <Seo
        title="Accueil - Orinoco, votre e-commerce ! Un projet OpenClassrooms"
      />
      <div id="productsList" className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
        { products
          ? products.map((product, index) => (
              <Product product={product} key={`product-${index}`} />
            ))
          : (
            <>
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
              <div className="rounded-md bg-oniPink animate-pulse h-80" />
            </>
            )
          }
        </div>
    </>
  )
}

function Product ({ product }) {
  return (
    <section>
      <div className="p-4 list-none transition duration-200 transform rounded-md bg-oniPink hover:scale-102">
        <Link
          href={{
            pathname: '/products/[productId]',
            query: { productId: product._id }
          }}
        >
          <a>
            <figure>
              <img className="object-cover w-full h-64 rounded" src={(process.env.NODE_ENV === 'production') ? product.imageUrl.replace('http', 'https') : product.imageUrl } alt="" />
              <figcaption className="pt-4">
                <div className="flex items-center mb-2">
                  <h2 className="font-bold ">{ product.name }</h2>
                  <div className="flex-grow" />
                  <div className="flex items-center mr-4">
                    <img className="h-5" src="./images/star.svg" alt="" />
                    <img className="h-5" src="./images/star.svg" alt="" />
                    <img className="h-5" src="./images/star.svg" alt="" />
                    <img className="h-5" src="./images/star.svg" alt="" />
                    <img className="h-5" src="./images/star.svg" alt="" />
                  </div>
                  <span className="px-2 py-1 text-sm font-bold bg-white rounded">{ product.price / 100 }.00???</span>
                </div>
                <p className="text-sm text-justify text-black text-opacity-80">{ product.description }</p>
              </figcaption>
            </figure>
          </a>
        </Link>
      </div>
    </section>
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
