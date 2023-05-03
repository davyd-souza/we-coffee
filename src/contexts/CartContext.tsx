// DEPENDENCY
import { ReactNode, createContext, useState } from 'react'

// TYPE
type CartType = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: CartType[]
  addItemToCart: (cartItem: CartType) => void
}

type CartContextProviderType = {
  children: ReactNode
}

// CONTEXT
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderType) {
  const [cart, setCart] = useState<CartType[]>([])

  const addItemToCart = (cartItem: CartType) => {
    if (cartItem.quantity === 0) {
      return
    }

    const newCartList = cart.filter((item) => item.id !== cartItem.id)
    setCart([...newCartList, cartItem])
  }

  // useEffect(() => {
  //   console.log('[CartContext > useEffect > cart]', cart)
  // }, [cart])

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
