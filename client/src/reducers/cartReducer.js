import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_CART,
  UPDATE_QUANTITY,
} from "../context/constant";

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CART:
      return { ...state, cartProduct: payload, cartProductLoading: false };
    case ADD_TO_CART:
      return { ...state, cartProduct: [state.cartProduct, payload] };
    case REMOVE_CART:
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (cart) => cart._id !== payload._id
        ),
      };
    case UPDATE_QUANTITY:
      const index = state.cartProduct.findIndex((c) => c._id === payload._id);
      state.cartProduct[index] = payload;
      return { ...state };
    default:
      return state;
  }
};
