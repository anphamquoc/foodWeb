import React from "react";
import { NavLink } from "react-router-dom";

const Swiper = ({
  restaurant,
  star,
  time,
  distance,
  haveDiscount,
  discountName,
}) => {
  return (
    <NavLink to={`/info/${restaurant._id}`} className="swiper-slide">
      <img
        src={`/${restaurant.urlhinhanh}`}
        alt="RoyalTea"
        className="food-image"
      />
      <h6 className="food-address">{restaurant.tenqa}</h6>
      <p className="filter-name">{restaurant.diachi}</p>
      <div className="basic-info">
        <div className="ranking">
          <img src="/image/icon/icon-star.svg" alt="icon-star" />
          <span className="ranking-number">{restaurant.star}</span>
        </div>
        <div className="time-distance">
          <div className="time">
            <img src="image/icon/icon-clock.svg" alt="icon-clock" />
            <span className="time-number">{time}</span>
          </div>
          <div className="distance">
            <span>{distance}</span>
          </div>
        </div>
      </div>
      {haveDiscount && (
        <div className="discount">
          <img
            src="image/icon/icon-promo-tag.svg"
            alt="icon-promo-tag"
            className="discount-logo"
          />
          <span className="discount-text">{discountName}</span>
        </div>
      )}
    </NavLink>
  );
};

export default Swiper;
