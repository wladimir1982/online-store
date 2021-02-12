import {SET_CATEGORY} from './actionTypes'

export function setCategory(categoryName) {
  return {
    type: SET_CATEGORY,
    payload: categoryName,
  }
}