import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  apiUrl,
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_CART,
  UPDATE_QUANTITY,
} from "./constant";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartProduct: null,
    cartProductLoading: true,
  });
  const [addProductStatus, setAddProductStatus] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await axios.get(`${apiUrl}/cart`);
        if (response.data.success) {
          dispatch({
            type: LOAD_CART,
            payload: response.data.cart,
          });
        }
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    loadCart();
  }, []);

  const addToCart = async (newProduct, productId) => {
    try {
      const response = await axios.post(
        `${apiUrl}/cart/${productId}`,
        newProduct
      );
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: ADD_TO_CART,
          payload: response.data.newAddProduct,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProduct = async (cartId) => {
    try {
      const response = await axios.delete(`${apiUrl}/cart/${cartId}`);
      if (response.data.success) {
        dispatch({
          type: REMOVE_CART,
          payload: response.data.deleteProduct,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateQuantity = async (cartId, quantity) => {
    try {
      const response = await axios.put(`${apiUrl}/cart/${cartId}`, {
        quantity,
      });
      if (response.data.success) {
        dispatch({
          type: UPDATE_QUANTITY,
          payload: response.data.cartUpdate,
        });
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const cartContextData = {
    addToCart,
    cartState,
    addProductStatus,
    setAddProductStatus,
    deleteProduct,
    updateQuantity,
  };
  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
