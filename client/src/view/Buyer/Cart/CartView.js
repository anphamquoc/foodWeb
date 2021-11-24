import React from "react";
import Header from "../../../components/main/Header";
import CartContextProvider from "../../../context/CartContext";
import Cart from "../../../components/main/Cart/Cart";
import "./Cart.css";
const CartView = () => {
  return (
    <CartContextProvider>
      <Header />
      <Cart />
    </CartContextProvider>
  );
};

export default CartView;
