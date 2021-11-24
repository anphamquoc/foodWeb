import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import { paymentReducer } from "reducers/paymentReducer";
import { apiUrl, LOAD_PAYMENT, PAYMENT_SUCCESS } from "./constant";

export const PaymentContext = createContext();

const PaymentContextProvider = ({ children }) => {
  const [paymentState, dispatch] = useReducer(paymentReducer, {
    allPayment: null,
    loadingAllPayment: true,
    payment: null,
    loadPayment: true,
  });
  useEffect(() => {
    const loadPayment = async () => {
      try {
        const response = await axios.get(`${apiUrl}/payment`);
        if (response.data.success) {
          dispatch({
            type: LOAD_PAYMENT,
            payload: response.data.payment,
          });
        }
        return response.data;
      } catch (error) {}
    };
    loadPayment();
  }, []);

  const checkoutSuccess = async (cartId, total, sellerId) => {
    try {
      const response = await axios.post(`${apiUrl}/payment`, {
        cartId,
        total,
        sellerId,
      });
      if (response.data.success) {
        dispatch({
          type: PAYMENT_SUCCESS,
          payload: response.data.newPayment,
        });
      }
    } catch (error) {}
  };
  const PaymentData = { checkoutSuccess, paymentState };

  return (
    <PaymentContext.Provider value={PaymentData}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContextProvider;
