import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { apiUrl, GET_ORDER } from "context/constant";
import { orderReducer } from "reducers/Seller/orderReducer";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderState, dispatch] = useReducer(orderReducer, {
    orders: null,
    orderLoading: true,
  });

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const response = await axios.get(`${apiUrl}/seller/payment`);
        if (response.data.success) {
          dispatch({
            type: GET_ORDER,
            payload: response.data.order,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadOrder();
  }, []);
  const orderData = {
    orderState: orderState,
  };
  return (
    <OrderContext.Provider value={orderData}>{children}</OrderContext.Provider>
  );
};

export default OrderContextProvider;
