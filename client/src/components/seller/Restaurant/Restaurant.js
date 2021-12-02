import { AuthContext } from "context/AuthContext";
import { RestaurantSContext } from "context/Seller/RestaurantSContext";
import React, { useContext, useState } from "react";
import AddRestaurant from "./AddRestaurant";
import Item from "./Item";
const Restaurant = () => {
  const {
    restaurantState: { restaurants, restaurantLoading },
  } = useContext(RestaurantSContext);
  const {
    authState: { authLoading, isSeller },
  } = useContext(AuthContext);
  const [initialRestaurant, setInitialRestaurant] = useState({});
  const [show, setShow] = useState(false);
  if (restaurantLoading || authLoading) return "Loading...";
  return (
    <div className="seller-restaurant">
      {isSeller === false ? (
        <h1>Không có quyền để vào trang này</h1>
      ) : (
        <>
          <AddRestaurant
            show={show}
            setShow={setShow}
            initialRestaurant={initialRestaurant}
          />
          <h1>Thông tin các quán ăn của bạn</h1>
          <div className="swiper-container">
            <div
              className="swiper-slide"
              onClick={() => setInitialRestaurant({})}
            >
              <div className="add-image" onClick={() => setShow(true)}>
                <img src="/image/icon/add_icon.png" alt="add-icon" />
              </div>
              <h6 className="food-address">Thêm quán ăn</h6>
            </div>
            {restaurants.map((restaurant, i) => (
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

export default Restaurant;
