// REDUCER
import { AddressType, CartType } from './reducer'

// TYPE
export enum CartActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY',
  DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY',
  CHANGE_CART_ITEM_INPUT_QUANTITY = 'CHANGE_CART_ITEM_INPUT_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
}

export function addCartItemAction(cartItem: CartType) {
  return {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: {
      cartItem,
    },
  }
}

export function removeCartItemAction(cartItemId: string) {
  return {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: {
      cartItemId,
    },
  }
}

export function incrementCartItemQuantityAction(cartItemId: string) {
  return {
    type: CartActionTypes.INCREMENT_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
    },
  }
}

export function decrementCartItemQuantityAction(cartItemId: string) {
  return {
    type: CartActionTypes.DECREMENT_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
    },
  }
}

export function changeCartItemInputQuantityAction(
  cartItemId: string,
  value: number,
) {
  return {
    type: CartActionTypes.CHANGE_CART_ITEM_INPUT_QUANTITY,
    payload: {
      cartItemId,
      value,
    },
  }
}

export function clearCartAction() {
  return {
    type: CartActionTypes.CLEAR_CART,
    payload: {},
  }
}

export function updateAddressAction(address: AddressType) {
  return {
    type: CartActionTypes.UPDATE_ADDRESS,
    payload: {
      address,
    },
  }
}
