import React from "react";
import Header from "components/main/Header";
import RestaurantContextProvider from "context/RestaurantContext";
import AdminRestaurant from "components/admin/Restaurant/AdminRestaurant";
import RestaurantSContextProvider from "context/Seller/RestaurantSContext";

const AdminRestaurantView = () => {
  return (
    <RestaurantContextProvider>
      <RestaurantSContextProvider>
        <Header />
        <AdminRestaurant />
      </RestaurantSContextProvider>
    </RestaurantContextProvider>
  );
};

export default AdminRestaurantView;
