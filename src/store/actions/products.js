import axios from 'axios'
import {SET_LOADED, SET_PRODUCTS} from './actionTypes'

export function fetchProducts() {
  return async dispatch => {
    dispatch(setLoaded(false))
    try {
      const response = await axios.get('http://167.172.186.154/api/products')
      const products = response.data

      dispatch(setProducts(products))
    } catch (e) {
      console.log('error @@@@: ', e)
    }
  }
}

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
      payload: products,
  }
}

export function setLoaded(payload) {
  return {
    type: SET_LOADED,
    payload
  }
}