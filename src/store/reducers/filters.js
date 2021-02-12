import {SET_CATEGORY} from '../actions/actionTypes'

const initialState = {
  category: 'All products',
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {...state, category: action.payload}
    default:
      return state
  }
}

export default filters