import { GET_ORDER } from "context/constant";

export const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ORDER:
      return { ...state, orders: payload, orderLoading: false };
    default:
      return { ...state };
  }
};
