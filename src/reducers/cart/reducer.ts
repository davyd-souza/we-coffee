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
      }
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload.cartItemId,
        ),
      }
    }
    case CartActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
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
    case CartActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
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
    case CartActionTypes.CHANGE_CART_ITEM_INPUT_QUANTITY: {
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
}
