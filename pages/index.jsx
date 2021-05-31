import Link from 'next/link'
import Seo from '../components/Seo'
import getProducts from '../services/getProducts'

export default function Home ({ products }) {
  return (
    <>
      <Seo
        title="Accueil - Orinoco, votre e-commerce ! Un projet OpenClassrooms"
        description="Le site e-commerce pour vos oursons en peluche ! Un projet OpenClassrooms réalisé par Mathis Barré"
      />
      <ul id="productsList" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        { products
          ? (
            <>
            { products.map((product, index) => (
              <section key={`product-${index}`}>
                <li className="list-none bg-oniPink rounded-md p-4 transition duration-200 transform hover:scale-102">
                  <Link
                    href={{
                      pathname: '/products/[productId]',
                      query: { productId: product._id }
                    }}
                  >
                    <a>
                      <figure>
                        <img className="rounded h-64 w-full object-cover" src={ product.imageUrl } alt="" />
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
                            <span className="text-sm font-bold bg-white px-2 py-1 rounded">{ product.price / 100 }.00€</span>
                          </div>
                          <p className="text-black text-opacity-80 text-sm text-justify">{ product.description }</p>
                        </figcaption>
                      </figure>
                    </a>
                  </Link>
                </li>
              </section>
            ))}
            </>
            )
          : (
            <>
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
              <div className="bg-oniPink animate-pulse h-80 rounded-md" />
            </>
            )
          }
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
