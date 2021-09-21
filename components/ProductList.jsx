import { useContext } from 'react'
import { updateProductQuantity, getTotalPrice } from '../utils/cart.utils'
import { BasketContext } from './BasketContext'

export default function ProductList () {
  const { basket, setBasket } = useContext(BasketContext)

  return (
    <section className="p-4 mt-4 rounded-md bg-oniPink">
      <h2 className="mb-2 text-lg font-bold">Votre carte</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white border">
            <th className="py-2">Produit</th>
            <th>Quantité</th>
            <th>Prix</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="productsList">
          { Object.values(basket).map((productInCart, index) => (
            <tr key={`productInCart-${index}`} className="bg-white border rounded">
              <td className="p-0 py-2 text-center">{ productInCart.name }</td>
              <td className="p-0 text-center">
                <form className="flex">
                  <select
                    className="z-10 block w-full py-1 pl-3 pr-10 text-base text-center border border-indigo-200 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="quantity"
                    value={productInCart.quantity}
                    onChange={(e) => {
                      setBasket(updateProductQuantity(basket, e.target.value, productInCart._id))
                    }}
                  >
                    { [...Array(12)].map((empty, index) => {
                      return <option key={`product-${productInCart._id}-choice-${index}`} value={index + 1}>{ index + 1 }</option>
                    })}
                  </select>
                </form>
              </td>
              <td id="productPrice" className="p-0 text-center">{productInCart.price / 100}.00€</td>
              <td id="productTotalPrice" className="p-0 text-center">{productInCart.price * productInCart.quantity / 100}.00€</td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td colSpan={3} className="py-2 text-center">Total</td>
            <td className="text-center">{getTotalPrice(basket) / 100}.00€</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
