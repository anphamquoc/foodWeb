import Header from "components/main/Header";
import Food from "components/seller/Food/Food";
import FoodSContextProvider from "context/Seller/FoodSContext";
import React from "react";
import "./FoodView.scss";
const FoodView = () => {
  return (
    <FoodSContextProvider>
      <Header />
      <Food />
    </FoodSContextProvider>
  );
};

export default FoodView;
