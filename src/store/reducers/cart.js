import {ADD_PRODUCT_CART, CLEAR_CART, MINUS_PRODUCT_ITEM,
  PLUS_PRODUCT_CART, REMOVE_CART_ITEM} from '../actions/actionTypes'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const roundAccurately = (number, decimalPlaces) => {
  return Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)
}

const getTotalPrice = arr => roundAccurately(arr.reduce((sum, obj) => (+obj.price + sum), 0), 2)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.')
  return keys.reduce((val, key) => {
    return val[key]
  }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path)
    return roundAccurately(sum + value, 2)
  }, 0)
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART: {
      const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    case REMOVE_CART_ITEM: {
      const newItem = {...state.items}
      const currentTotalPrice = newItem[action.payload].totalPrice
      const currentTotalCount = newItem[action.payload].items.length
      delete newItem[action.payload]
      return {
        ...state,
        items: newItem,
        totalPrice: roundAccurately(state.totalPrice - currentTotalPrice, 2),
        totalCount: state.totalCount - currentTotalCount
      }
    }
    case PLUS_PRODUCT_CART: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    case MINUS_PRODUCT_ITEM: {
      const oldItems = state.items[action.payload].items
      const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')


      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    case CLEAR_CART:
      return {totalPrice: 0, totalCount: 0, items: {}}
    default:
      return state
  }
}

export default cart