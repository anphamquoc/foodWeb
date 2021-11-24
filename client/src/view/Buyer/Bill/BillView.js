import React from "react";
import Header from "components/main/Header";
import Bill from "components/main/Bill/Bill";
import "./Bill.scss";
import PaymentContextProvider from "context/PaymentContext";

const BillView = () => {
  return (
    <PaymentContextProvider>
      <Header />
      <Bill />
    </PaymentContextProvider>
  );
};

export default BillView;
