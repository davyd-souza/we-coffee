// DEPENDENCY
import { produce } from 'immer'

// TYPE
import { CartActionTypes } from './actions'
export type CartType = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export type AddressType = {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

type CartState = {
  cart: CartType[]
  totalPriceCart: number
  address: AddressType
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM: {
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.cartItem.id,
      )

      return produce(state, (draft) => {
        cartItemIndex < 0
          ? draft.cart.push(action.payload.cartItem)
          : (draft.cart[cartItemIndex] = action.payload.cartItem)

        draft.totalPriceCart = draft.cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        )
      })
    }

    case CartActionTypes.REMOVE_CART_ITEM: {
      const cartWithoutRemovedItem = state.cart.filter(
        (item) => item.id !== action.payload.cartItemId,
      )

      return produce(state, (draft) => {
        draft.cart = cartWithoutRemovedItem
        draft.totalPriceCart = draft.cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        )
      })
    }

    case CartActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
      const itemCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.cartItemId,
      )

      return produce(state, (draft) => {
        draft.cart[itemCartIndex].quantity += 1
        draft.totalPriceCart = draft.cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        )
      })
    }

    case CartActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
      const itemCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.cartItemId,
      )

      return produce(state, (draft) => {
        if (draft.cart[itemCartIndex].quantity <= 0) {
          return state
        }

        draft.cart[itemCartIndex].quantity -= 1
        draft.totalPriceCart = draft.cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        )
      })
    }

    case CartActionTypes.CHANGE_CART_ITEM_INPUT_QUANTITY: {
      const itemCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.cartItemId,
      )

      return produce(state, (draft) => {
        if (Number.isNaN(action.payload.value)) {
          return state
        }

        draft.cart[itemCartIndex].quantity = action.payload.value
        draft.totalPriceCart = draft.cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0,
        )
      })
    }

    case CartActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cart = []
        draft.totalPriceCart = 0
      })
    }

    case CartActionTypes.UPDATE_ADDRESS: {
      return produce(state, (draft) => {
        draft.address = action.payload.address
      })
    }
    default:
      return state
  }
}
