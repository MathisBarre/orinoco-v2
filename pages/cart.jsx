import Seo from '../components/Seo'
import ProductList from '../components/ProductList'
import CheckoutForm from '../components/CheckoutForm'

export default function CartePage () {
  return (
    <>
      <Seo
        title="Panier - Orinoco, votre e-commerce ! Un projet OpenClassrooms"
      />
      <div>
        <ProductList />
        <CheckoutForm />
      </div>
    </>
  )
}
