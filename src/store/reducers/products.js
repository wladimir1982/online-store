import {SET_LOADED, SET_PRODUCTS} from '../actions/actionTypes'

const initialState = {
  products: [],
  isLoaded: false,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload, isLoaded: true}
    case SET_LOADED:
      return {...state, isLoaded: action.payload}
    default:
      return state
  }
}

export default products