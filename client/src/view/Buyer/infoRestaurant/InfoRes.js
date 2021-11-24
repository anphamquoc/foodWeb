import React from "react";
import Header from "../../../components/main/Header";
import Footer from "../../../components/main/Footer";
import InfoRestaurant from "../../../components/main/Restaurant/InfoRestaurant";
import FoodContextProvider from "../../../context/FoodContext";
import "./infoRes.css";

const InfoRes = () => {
  return (
    <FoodContextProvider>
      <Header />
      <InfoRestaurant />
      <Footer />
    </FoodContextProvider>
  );
};

export default InfoRes;
