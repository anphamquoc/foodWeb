import React from "react";
import Header from "../../../components/main/Header";
import Checkout from "../../../components/main/Checkout/Checkout";
import CartContextProvider from "../../../context/CartContext";
import "./Checkout.css";
import PaymentContextProvider from "context/PaymentContext";

const CheckoutView = () => {
  return (
    <PaymentContextProvider>
      <CartContextProvider>
        <Header />
        <Checkout />
      </CartContextProvider>
    </PaymentContextProvider>
  );
};

export default CheckoutView;
