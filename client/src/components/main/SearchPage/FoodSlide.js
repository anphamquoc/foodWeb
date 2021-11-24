import React from "react";
import { NavLink } from "react-router-dom";

const FoodSlide = ({ quan }) => {
  return (
    <NavLink to={`/info/${quan._id}`} className="food-slide">
      <img src={`/${quan.urlhinhanh}`} alt="RoyalTea" className="food-image" />
      <h6 className="food-address">{quan.tenqa}</h6>
      <p className="filter-name">{quan.tenloaimonan[0].tenloai}</p>
      <div className="basic-info">
        <div className="ranking">
          <img src="/image/icon/icon-star.svg" alt="icon-star" />
          <span className="ranking-number">{quan.star}</span>
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
      <div className="discount">
        <img
          src="/image/icon/icon-promo-tag.svg"
          alt="icon-promo-tag"
          className="discount-logo"
        />
        <span className="discount-text">
          Giảm 50% mã MIENPHI50.Giảm 70K đơn 150K mã MIENPHI70.Giảm 50% đơn 40K
          mã BOSS20.Giảm 40K mã BOSS40.Giảm 70K mã BOSS70.
        </span>
      </div>
    </NavLink>
  );
};

export default FoodSlide;
