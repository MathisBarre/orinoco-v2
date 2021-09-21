import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { BasketContext } from './BasketContext'

export default function CheckoutForm () {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { basket } = useContext(BasketContext)

  function proceedPayment (data) {
    const products = Object.values(basket).map((product) => {
      return product._id
    })

    const order = {
      contact: data,
      products: products
    }

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    fetch(`${apiUrl}/api/teddies/order`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        localStorage.removeItem('shoppingCart')
        router.push(`/orderStatus?orderId=${json.orderId}`)
      })
      .catch((error) => {
        console.log(error)
        // alert(error)
      })
  }

  return (
    <section className="p-4 mt-4 rounded-md bg-oniPink">
      <h2 className="mb-2 text-lg font-bold">Passer commande</h2>
      <form onSubmit={handleSubmit(proceedPayment)} className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="label">Prénom</label>
          <input className="input" type="text" {...register('firstName', { required: true, maxLength: 80 })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="label">Nom</label>
          <input className="input" type="text" {...register('lastName', { required: true, maxLength: 100 })} />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="email" className="label">Adresse e-mail</label>
          <input className="input" type="text" {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="address" className="label">Adresse</label>
          <input id="adress" className="input" type="text" {...register('address', { required: true, min: 5 })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="zipcode" className="label">Code postal</label>
          <input className="input" type="number" {...register('zipcode', { required: true, max: 99999, min: 10000, maxLength: 5 })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="label">Ville</label>
          <input className="input" type="text" {...register('city', { required: true })} />
        </div>
        <div className="flex col-span-4">
          <input value="Procéder au paiement" type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
        </div>
      </form>
    </section>
  )
}
