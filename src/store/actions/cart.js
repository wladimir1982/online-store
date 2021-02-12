import {ADD_PRODUCT_CART, CLEAR_CART, MINUS_PRODUCT_ITEM,
  PLUS_PRODUCT_CART, REMOVE_CART_ITEM} from './actionTypes'

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_CART,
      payload: product,
  }
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  }
}

export function removeCartItem(id) {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  }
}

export function plusCartItem(id) {
  return {
    type: PLUS_PRODUCT_CART,
    payload: id,
  }
}

export function minusCartItem(id) {
  return {
    type: MINUS_PRODUCT_ITEM,
    payload: id,
  }
}
