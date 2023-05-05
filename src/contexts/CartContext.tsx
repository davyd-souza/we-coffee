// DEPENDENCY
import { ReactNode, createContext, useEffect, useReducer } from 'react'

// REDUCER
import { AddressType, cartReducer, CartType } from 'reducers/cart/reducer'
import {
  addCartItemAction,
  changeCartItemInputQuantityAction,
  decrementCartItemQuantityAction,
  incrementCartItemQuantityAction,
  removeCartItemAction,
  updateAddressAction,
} from 'reducers/cart/actions'

// TYPE
type CartContextType = {
  cart: CartType[]
  addCartItem: (cartItem: CartType) => void
  removeCartItem: (cartItemId: string) => void
  incrementCartItemQuantity: (cartItemId: string) => void
  decrementCartItemQuantity: (cartItemId: string) => void
  changeCartItemInputQuantity: (cartItemId: string, value: number) => void
  totalPriceCart: number
  address: AddressType
  updateAddress: (address: AddressType) => void
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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [
        // {
        //   id: '1118d9c6-b426-48e2-862f-8551f6c8471f',
        //   name: 'Espresso',
        //   price: 6,
        //   image: 'http://localhost:5173/assets/images/cafe/quente/espresso.webp',
        //   quantity: 2,
        // },
      ],
      totalPriceCart: 0,
      address: {
        zip: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      },
    },
    (initialState) => {
      const storedCartStateJSON = localStorage.getItem(
        '@we-coffee:cartState-1.0.0',
      )

      if (storedCartStateJSON) {
        return JSON.parse(storedCartStateJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    console.log('[CartContext > useEffect > cartState]', cartState)

    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@we-coffee:cartState-1.0.0', stateJSON)
  }, [cartState])

  const { cart, totalPriceCart, address } = cartState

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

  const updateAddress = (address: AddressType) => {
    dispatch(updateAddressAction(address))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        changeCartItemInputQuantity,
        totalPriceCart,
        address,
        updateAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
