export const initialState = {
  basket: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
      break
    case "ADD_SAME_PRODUCT_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket].map((product) => (product.id === action.item.id ? { ...product, quantity: product.quantity + 1 } : product)),
      }
    case "REFLECT_AMOUNT_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket].map((product) => (product.id === action.item.id ? { ...product, quantity: action.item.quantity } : product)),
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.removeItem.id),
      }
  }
}

export default reducer
