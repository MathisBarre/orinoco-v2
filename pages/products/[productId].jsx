import { useContext } from 'react'
import { useRouter } from 'next/router'
import Seo from '../../components/Seo'
import getProduct from '../../services/getProduct'
import getProducts from '../../services/getProducts'
import { addProduct } from '../../utils/cart.utils'
import { BasketContext } from '../../components/BasketContext'

export default function ProductPage ({ product }) {
  const router = useRouter()
  const { basket, setBasket } = useContext(BasketContext)

  function redirectToShoppingCart () {
    router.push('/cart')
  }

  return (
    <>
      <Seo
        title={`Ourson ${product.name} - Orinoco, votre e-commerce ! Un projet OpenClassrooms`}
      />
      <section className="flex flex-col items-stretch w-full p-4 mt-4 rounded-md lg:flex-row bg-oniPink">
        <div className="w-full h-full mr-4 lg:w-1/2 md:min-w-1/2">
          <img id="productImage" className="object-cover rounded" src={product.imageUrl} alt="" />
        </div>
        <div className="flex flex-col flex-wrap items-start w-full">
          <h1 className="w-full mt-8 mb-8 text-xl font-bold text-center lg:mt-4">Ours en peluche &quot;<span id="productName">{product.name}</span>&quot;</h1>
          <div className="flex items-center">
            <img className="h-5" src="/images/star.svg" alt="" />
            <img className="h-5" src="/images/star.svg" alt="" />
            <img className="h-5" src="/images/star.svg" alt="" />
            <img className="h-5" src="/images/star.svg" alt="" />
            <img className="h-5" src="/images/star.svg" alt="" />
            <p className="ml-2">
              <span className="underline cursor-pointer">56 avis</span> - <span className="underline cursor-pointer">12 produits en stock</span>
            </p>
          </div>
          <p id="productDescription" className="mt-4 text-justify text-black text-opacity-80">{product.description}</p>
          <div className="flex-grow" />
          <h2 className="mt-4 font-bold text-bold font-lg">Choisir la couleur de votre produit : </h2>
          <div id="productColors" className="grid w-full gap-4 mt-4" style={{ gridTemplateColumns: `repeat(${product.colors.length}, 1fr)` }}>
            { product.colors.map((color) => {
              if (color === 'Pale brown') color = 'beige'
              if (color === 'Dark brown') color = 'tan'

              return (
                <div
                  key={`color-${color}`}
                  className="flex-grow h-12 transition duration-150 transform rounded cursor-pointer sm:h-20 hover:scale-105"
                  style={{ backgroundColor: color }}
                />
              )
            })}
          </div>
          <button
            className="w-full py-2 mt-4 text-lg font-bold text-center text-white transition duration-150 transform bg-pink-600 rounded mb hover:scale-102"
            onClick={() => {
              setBasket(addProduct(basket, product))
              redirectToShoppingCart()
            }}
          >
            Ajouter au panier pour <span id="productPrice">{product.price / 100}.00€</span>
          </button>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps (context) {
  const product = await getProduct(context.params.productId)

  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths () {
  const products = await getProducts()
  const productsId = products.reduce((acc, current) => { return [...acc, current._id] }, [])
  const paths = productsId.map((productId) => {
    return { params: { productId } }
  })

  return {
    paths,
    fallback: false
  }
}
