// TYPE
import { CartActionTypes } from './actions'
export type CartType = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartState = {
  cart: CartType[]
  totalPriceCart: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM: {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.cartItem.id,
      )

      return {
        ...state,
        cart: [...newCart, action.payload.cartItem],
        totalPriceCart: [...newCart, action.payload.cartItem].reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        ),
      }
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.cartItemId,
      )

      return {
        ...state,
        cart: newCart,
        totalPriceCart: newCart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        ),
      }
    }
    case CartActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload.cartItemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })

      return {
        ...state,
        cart: newCart,
        totalPriceCart: newCart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        ),
      }
    }
    case CartActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
      const newCart = state.cart.map((item) => {
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
      })
      return {
        ...state,
        cart: newCart,
        totalPriceCart: newCart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        ),
      }
    }
    case CartActionTypes.CHANGE_CART_ITEM_INPUT_QUANTITY: {
      const newCart = state.cart.map((item) => {
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
      })
      return {
        ...state,
        cart: newCart,
        totalPriceCart: newCart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        ),
      }
    }
    default:
      return state
  }
}
