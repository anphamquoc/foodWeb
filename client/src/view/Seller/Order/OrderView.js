import React from "react";
import Order from "components/seller/Order/Order";
import Header from "components/main/Header";
import OrderContextProvider from "context/Seller/OrderContext";
import "./Order.scss";
const OrderView = () => {
  return (
    <OrderContextProvider>
      <Header />
      <Order />
    </OrderContextProvider>
  );
};

export default OrderView;
