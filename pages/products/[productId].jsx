import Seo from '../../components/Seo'
import getProduct from '../../services/getProduct'
import getProducts from '../../services/getProducts'

export default function ProductPage ({ product }) {
  return (
    <>
      <Seo
        title={`Ourson ${product.name} - Orinoco, votre e-commerce ! Un projet OpenClassrooms`}
      />
      { console.log(product) }
      <section className="flex flex-col items-stretch lg:flex-row mt-4 rounded-md w-full p-4 bg-oniPink">
        <div className="w-full lg:w-1/2 md:min-w-1/2 h-full mr-4">
          <img id="productImage" className="rounded object-cover" src={product.imageUrl} alt="" />
        </div>
        <div className="flex flex-col flex-wrap items-start w-full">
          <h1 className="w-full text-xl text-center font-bold mb-8 mt-8 lg:mt-4">Ours en peluche &quot;<span id="productName">{product.name}</span>&quot;</h1>
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
          <p id="productDescription" className="text-black text-opacity-80 text-justify mt-4">{product.description}</p>
          <div className="flex-grow" />
          <h2 className="text-bold font-lg font-bold mt-4">Choisir la couleur de votre produit : </h2>
          <div id="productColors" className="grid gap-4 mt-4 w-full" style={{ gridTemplateColumns: `repeat(${product.colors.length}, 1fr)` }}>
            { product.colors.map((color) => {
              if (color === 'Pale brown') color = 'beige'
              if (color === 'Dark brown') color = 'tan'

              return (
                <div
                  key={`color-${color}`}
                  className="h-12 sm:h-20 cursor-pointer flex-grow rounded transition duration-150 transform hover:scale-105"
                  style={{ backgroundColor: color }}
                />
              )
            })}
          </div>
          <button
            className="w-full bg-pink-600 text-white text-center font-bold text-lg rounded mt-4 py-2 mb transition duration-150 transform hover:scale-102"
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
