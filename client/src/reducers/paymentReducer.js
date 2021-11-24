import { LOAD_PAYMENT, PAYMENT_SUCCESS } from "context/constant";

export const paymentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PAYMENT:
      return { ...state, allPayment: payload, loadingAllPayment: false };
    case PAYMENT_SUCCESS:
      return { ...state, payment: payload, loadPayment: false };
    default:
      return { ...state };
  }
};
