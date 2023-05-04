// DEPENDENCY
import { ReactNode, createContext, useState, useEffect } from 'react'

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
  removeCartItem: (cartItemId: string) => void
  incrementQuantityCartItem: (cartItemId: string) => void
  decrementQuantityCartItem: (cartItemId: string) => void
  inputQuantityChangeCartItem: (cartItemId: string, value: number) => void
}

type CartContextProviderType = {
  children: ReactNode
}

// CONTEXT
export const CartContext = createContext({} as CartContextType)

// const CART_DATA = [
//   {
//     id: '1118d9c6-b426-48e2-862f-8551f6c8471f',
//     name: 'Espresso',
//     price: 6,
//     image: 'http://localhost:5173/assets/images/cafe/quente/espresso.webp',
//     quantity: 2,
//   },
//   {
//     id: 'c72a8fa1-71a1-4c2a-b962-165750d3376c',
//     name: 'Café Coado',
//     price: 18,
//     image: 'http://localhost:5173/assets/images/cafe/quente/coado.webp',
//     quantity: 1,
//   },
//   {
//     id: '89eff95c-5116-4891-81c2-7f0c1e71395d',
//     name: 'Americano',
//     price: 9,
//     image: 'http://localhost:5173/assets/images/cafe/quente/americano.webp',
//     quantity: 3,
//   },
// ]

export function CartContextProvider({ children }: CartContextProviderType) {
  // const [cart, setCart] = useState<CartType[]>(CART_DATA)
  const [cart, setCart] = useState<CartType[]>([])

  const addItemToCart = (cartItem: CartType) => {
    if (cartItem.quantity === 0) {
      return
    }

    const newCartList = cart.filter((item) => item.id !== cartItem.id)
    setCart([...newCartList, cartItem])
  }

  const removeCartItem = (cartItemId: string) => {
    const newCartList = cart.filter((item) => item.id !== cartItemId)
    setCart(newCartList)
  }

  const incrementQuantityCartItem = (cartItemId: string) => {
    const newCartList = cart.map((item) => {
      if (item.id === cartItemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item
    })

    setCart(newCartList)
  }

  const decrementQuantityCartItem = (cartItemId: string) => {
    const newCartList = cart.map((item) => {
      if (item.id === cartItemId) {
        if (!(item.quantity <= 0)) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      }
      return item
    })

    setCart(newCartList)
  }

  const inputQuantityChangeCartItem = (cartItemId: string, value: number) => {
    const newCartList = cart.map((item) => {
      if (item.id === cartItemId) {
        if (!Number.isNaN(value)) {
          return {
            ...item,
            quantity: value,
          }
        }
        return item
      }
      return item
    })

    setCart(newCartList)
  }

  useEffect(() => {
    console.log('[CartContext > useEffect > cart]', cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeCartItem,
        incrementQuantityCartItem,
        decrementQuantityCartItem,
        inputQuantityChangeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
