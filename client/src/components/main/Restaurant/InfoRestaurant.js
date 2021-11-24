import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FoodContext } from "../../../context/FoodContext";
import Category from "./Category";
import Discount from "./Discount";
const InfoRestaurant = () => {
  const {
    foodState: { food, foodLoading, restaurant, restaurantLoading },
  } = useContext(FoodContext);
  if (restaurantLoading) return "Loading...";
  return (
    <main className="info-restaurant">
      <ul className="breadcrumb">
        <li>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to="/search">Nhà hàng</NavLink>
        </li>
        <li>{restaurant[0].tenqa}</li>
      </ul>
      <div className="description">
        <h1>{restaurant[0].tenqa}</h1>
        <h3 className="filter-name">{restaurant[0].loaimonan[0].tenloai}</h3>
        <div className="basic-info">
          <div className="ranking">
            <img src="/image/icon/icon-star.svg" alt="icon-star" />
            <span className="ranking-number">{restaurant[0].star}</span>
          </div>
          <div className="time-distance">
            <div className="time">
              <img src="/image/icon/icon-clock.svg" alt="icon-clock" />
              <span className="time-number">17 phút</span>
            </div>
            <div className="distance">
              <span>1,5 km</span>
            </div>
          </div>
        </div>
        <div className="opening">
          <span className="open-text">Thời gian mở cửa</span>
          <p className="open-time">Today {restaurant[0].thoigianphucvu}</p>
        </div>
        <div className="discounts">
          <Discount />
          <Discount />
        </div>
      </div>
      <hr />
      <div className="categories">
        <Category
          name="Các món ăn chính"
          food={food}
          foodLoading={foodLoading}
        />
      </div>
    </main>
  );
};

export default InfoRestaurant;
