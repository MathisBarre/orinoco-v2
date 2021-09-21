import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const BasketContext = createContext()

export default function BasketWrapper ({ children }) {
  const [basket, setBasket] = useLocalStorage('basket', [])
  const defaultBasketValue = { basket, setBasket }

  return (
    <BasketContext.Provider value={defaultBasketValue}>
      { children }
    </BasketContext.Provider>
  )
}
