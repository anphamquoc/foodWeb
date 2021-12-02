import React, { useContext } from "react";
import Item from "components/seller/Restaurant/Item";
import { AuthContext } from "context/AuthContext";
import { RestaurantContext } from "context/RestaurantContext";

const AdminRestaurant = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const {
    restaurantState: { restaurant, loadingRestaurant },
  } = useContext(RestaurantContext);
  if (loadingRestaurant) return "Loading..";
  return (
    <div className="seller-restaurant">
      {user.role !== "admin" ? (
        <h1>Không có quyền để vào trang này</h1>
      ) : (
        <>
          <h1>Thông tin tất cả quán ăn</h1>
          <div className="swiper-container">
            {restaurant.map((restaurant, i) => (
              <>
                <Item restaurant={restaurant} key={i} />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminRestaurant;
