import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cart from '../utils/Cart.utils'

export default function CartPage () {
  const router = useRouter()
  const [productsInCart, setProductsInCart] = useState({})

  useEffect(() => {
    setProductsInCart(Cart.products)
  }, [])

  useEffect(() => {
    Cart.products = productsInCart
  }, [productsInCart])

  function updateProductQuantity (e, productToUpdateId) {
    const newQuantity = e.target.value
    const newProductsInCart = productsInCart.map((product) => {
      if (product._id === productToUpdateId) { product.quantity = newQuantity }
      return product
    })
    setProductsInCart(newProductsInCart)
  }

  function getTotalPrice () {
    return Object.values(productsInCart).reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price)
    }, 0)
  }

  function proceedPayment () {
    localStorage.clear()
    router.push('/orderStatus')
  }

  return (
    <div>
      <section className="mt-4 rounded-md p-4 bg-oniPink">
        <h2 className="text-lg font-bold mb-2">Votre carte</h2>
        <table className="border-collapse w-full">
          <thead>
            <tr className="border bg-white">
              <th className="py-2">Produit</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody id="productsList">
            { Object.values(productsInCart).map((productInCart, index) => (
              <tr key={`productInCart-${index}`} className="border bg-white rounded">
                <td className="text-center p-0 py-2">{ productInCart.name }</td>
                <td className="text-center p-0">
                  <form className="flex">
                    <select
                      className="border border-indigo-200 rounded text-center w-full block pl-3 pr-10 py-1 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm z-10"
                      name="quantity"
                      value={productInCart.quantity}
                      onChange={(e) => { updateProductQuantity(e, productInCart._id) }}
                    >
                      { [...Array(12)].map((empty, index) => {
                        return <option key={`product-${productInCart._id}-choice-${index}`} value={index + 1}>{ index + 1 }</option>
                      })}
                    </select>
                  </form>
                </td>
                <td id="productPrice" className="text-center p-0">{productInCart.price / 100}.00€</td>
                <td id="productTotalPrice" className="text-center p-0">{productInCart.price * productInCart.quantity / 100}.00€</td>
              </tr>
            ))}

            <tr className="bg-gray-100">
              <td colSpan={3} className="text-center py-2">Total</td>
              <td className="text-center">{getTotalPrice() / 100}.00€</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="mt-4 rounded-md p-4 bg-oniPink">
        <h2 className="text-lg font-bold mb-2">Passer commande</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="label">Prénom</label>
            <input type="text" name="firstname" id="firstname" className="input" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="label">Nom</label>
            <input type="text" name="lastname" id="lastname" className="input" required />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="email" className="label">Adresse e-mail</label>
            <input type="text" name="email" id="email" className="input" required />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="adress" className="label">Adresse</label>
            <input type="text" name="adress" id="adress" className="input" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipcode" className="label">Code postal</label>
            <input type="text" name="zipcode" id="zipcode" className="input" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="label">Ville</label>
            <input type="text" name="city" id="city" className="input" required />
          </div>
        </div>
        <div className="flex justify-end">
          <a onClick={proceedPayment} id="confirmPurchase" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 cursor-pointer">
            Procéder au paiement
          </a>
        </div>

      </section>
    </div>
  )
}
