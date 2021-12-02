import React from "react";
import Header from "components/main/Header";
import Restaurant from "components/seller/Restaurant/Restaurant";
import "./Restaurant.scss";
import RestaurantSContextProvider from "context/Seller/RestaurantSContext";
import RestaurantContextProvider from "context/RestaurantContext";
const RestaurantView = () => {
  return (
    <RestaurantContextProvider>
      <RestaurantSContextProvider>
        <Header />
        <Restaurant />
      </RestaurantSContextProvider>
    </RestaurantContextProvider>
  );
};

export default RestaurantView;
