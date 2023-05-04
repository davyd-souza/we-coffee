// DEPENDENCY
import { ReactNode, createContext, useEffect, useReducer } from 'react'

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
  addCartItem: (cartItem: CartType) => void
  removeCartItem: (cartItemId: string) => void
  incrementCartItemQuantity: (cartItemId: string) => void
  decrementCartItemQuantity: (cartItemId: string) => void
  changeCartItemInputQuantity: (cartItemId: string, value: number) => void
}

type CartContextProviderType = {
  children: ReactNode
}

type CartState = {
  cart: CartType[]
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
  // const [cart, setCart] = useState<CartType[]>([])
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case 'ADD_CART_ITEM': {
          const newCart = state.cart.filter(
            (item) => item.id !== action.payload.cartItem.id,
          )

          return {
            ...state,
            cart: [...newCart, action.payload.cartItem],
          }
        }
        case 'REMOVE_CART_ITEM': {
          return {
            ...state,
            cart: state.cart.filter(
              (item) => item.id !== action.payload.cartItemId,
            ),
          }
        }
        case 'INCREMENT_CART_ITEM_QUANTITY': {
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload.cartItemId) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                }
              }
              return item
            }),
          }
        }
        case 'DECREMENT_CART_ITEM_QUANTITY': {
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload.cartItemId) {
                if (!(item.quantity <= 0)) {
                  return {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                }
                return item
              }
              return item
            }),
          }
        }
        case 'CHANGE_CART_ITEM_INPUT_QUANTITY': {
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload.cartItemId) {
                if (!Number.isNaN(action.payload.value)) {
                  return {
                    ...item,
                    quantity: action.payload.value,
                  }
                }
                return item
              }
              return item
            }),
          }
        }
        default:
          return state
      }
    },
    {
      cart: [
        {
          id: '1118d9c6-b426-48e2-862f-8551f6c8471f',
          name: 'Espresso',
          price: 6,
          image:
            'http://localhost:5173/assets/images/cafe/quente/espresso.webp',
          quantity: 2,
        },
      ],
    },
  )

  const { cart } = cartState

  const addCartItem = (cartItem: CartType) => {
    if (cartItem.quantity === 0) {
      return
    }

    // const newCart = cart.filter((item) => item.id !== cartItem.id)
    dispatch({
      type: 'ADD_CART_ITEM',
      payload: {
        cartItem,
      },
    })
    // setCart([...newCartList, cartItem])
  }

  const removeCartItem = (cartItemId: string) => {
    // const newCart = cart.filter((item) => item.id !== cartItemId)
    // setCart(newCartList)
    dispatch({
      type: 'REMOVE_CART_ITEM',
      payload: {
        cartItemId,
      },
    })
  }

  const incrementCartItemQuantity = (cartItemId: string) => {
    dispatch({
      type: 'INCREMENT_CART_ITEM_QUANTITY',
      payload: {
        cartItemId,
      },
    })
    // const newCartList = cart.map((item) => {
    //   if (item.id === cartItemId) {
    //     return {
    //       ...item,
    //       quantity: item.quantity + 1,
    //     }
    //   }
    //   return item
    // })

    // setCart(newCartList)
  }

  const decrementCartItemQuantity = (cartItemId: string) => {
    dispatch({
      type: 'DECREMENT_CART_ITEM_QUANTITY',
      payload: {
        cartItemId,
      },
    })
    // const newCartList = cart.map((item) => {
    //   if (item.id === cartItemId) {
    //     if (!(item.quantity <= 0)) {
    //       return {
    //         ...item,
    //         quantity: item.quantity - 1,
    //       }
    //     }
    //     return item
    //   }
    //   return item
    // })

    // setCart(newCartList)
  }

  const changeCartItemInputQuantity = (cartItemId: string, value: number) => {
    dispatch({
      type: 'CHANGE_CART_ITEM_INPUT_QUANTITY',
      payload: {
        cartItemId,
        value,
      },
    })
    // const newCartList = cart.map((item) => {
    //   if (item.id === cartItemId) {
    //     if (!Number.isNaN(value)) {
    //       return {
    //         ...item,
    //         quantity: value,
    //       }
    //     }
    //     return item
    //   }
    //   return item
    // })

    // setCart(newCartList)
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
