import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ShowRestaurant from "./ShowRestaurant";
import { NavLink } from "react-router-dom";
import { RestaurantSContext } from "context/Seller/RestaurantSContext";
import Check from "./Check";

const Item = ({ restaurant }) => {
  const [show, setShow] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const { deleteRestaurant } = useContext(RestaurantSContext);
  const handleDelete = () => {
    deleteRestaurant(restaurant._id);
  };
  return (
    <div className="swiper-slide">
      <Check
        showCheck={showCheck}
        setShowCheck={setShowCheck}
        handleDelete={handleDelete}
      />
      <ShowRestaurant
        show={show}
        setShow={setShow}
        initialRestaurant={restaurant}
      />
      <NavLink to={`/seller/food/${restaurant._id}`}>
        <img
          src="/image/restaurant/Banh.jpg"
          alt="RoyalTea"
          className="food-image"
        />
      </NavLink>
      <span className="delete-icon" onClick={() => setShowCheck(true)}>
        <img src="/image/icon/delete.png" alt="delete" />
      </span>
      <h6 className="food-address">{restaurant.tenqa}</h6>
      <div className="basic-info">
        <div className="ranking">
          <img src="/image/icon/icon-star.svg" alt="icon-star" />
          <span className="ranking-number">{restaurant.star}</span>
        </div>
        <div className="time-distance">
          <div className="time">
            <img src="/image/icon/icon-clock.svg" alt="icon-clock" />
            <span className="time-number">10 phút</span>
          </div>
          <div className="distance">
            <span>10km</span>
          </div>
        </div>
      </div>
      <Button onClick={() => setShow(true)}>Sửa đổi thông tin quán ăn</Button>
    </div>
  );
};

export default Item;
