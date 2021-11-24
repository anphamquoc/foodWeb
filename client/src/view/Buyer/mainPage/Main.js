import React from "react";
import Footer from "../../../components/main/Footer";
import Header from "../../../components/main/Header";
import MainPage from "../../../components/main/MainPage/MainPage";
import RestaurantContextProvider from "../../../context/RestaurantContext";
import "./MainPage.css";

const Main = () => {
  return (
    <RestaurantContextProvider>
      <Header />
      <MainPage />
      <Footer footer1={true} />
    </RestaurantContextProvider>
  );
};

export default Main;
