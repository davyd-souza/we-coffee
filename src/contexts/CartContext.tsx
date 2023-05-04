// DEPENDENCY
import { ReactNode, createContext, useEffect, useReducer } from 'react'

// REDUCER
import { cartReducer, CartType } from 'reducers/cart/reducer'
import {
  addCartItemAction,
  changeCartItemInputQuantityAction,
  decrementCartItemQuantityAction,
  incrementCartItemQuantityAction,
  removeCartItemAction,
} from 'reducers/cart/actions'

// TYPE
type CartContextType = {
  cart: CartType[]
  addCartItem: (cartItem: CartType) => void
  removeCartItem: (cartItemId: string) => void
  incrementCartItemQuantity: (cartItemId: string) => void
  decrementCartItemQuantity: (cartItemId: string) => void
  changeCartItemInputQuantity: (cartItemId: string, value: number) => void
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
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [
      {
        id: '1118d9c6-b426-48e2-862f-8551f6c8471f',
        name: 'Espresso',
        price: 6,
        image: 'http://localhost:5173/assets/images/cafe/quente/espresso.webp',
        quantity: 2,
      },
    ],
  })

  const { cart } = cartState

  const addCartItem = (cartItem: CartType) => {
    if (cartItem.quantity === 0) {
      return
    }

    dispatch(addCartItemAction(cartItem))
  }

  const removeCartItem = (cartItemId: string) => {
    dispatch(removeCartItemAction(cartItemId))
  }

  const incrementCartItemQuantity = (cartItemId: string) => {
    dispatch(incrementCartItemQuantityAction(cartItemId))
  }

  const decrementCartItemQuantity = (cartItemId: string) => {
    dispatch(decrementCartItemQuantityAction(cartItemId))
  }

  const changeCartItemInputQuantity = (cartItemId: string, value: number) => {
    dispatch(changeCartItemInputQuantityAction(cartItemId, value))
  }

  useEffect(() => {
    console.log('[CartContext > useEffect > cart]', cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        changeCartItemInputQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
