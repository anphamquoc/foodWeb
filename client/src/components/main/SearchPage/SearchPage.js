import React, { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import Food from "./Food";
import SwiperSlide from "./SwiperSlide";
import { NavLink } from "react-router-dom";

const SearchPage = () => {
  const {
    searchState: { quanAn, searchLoading },
    searchFood,
  } = useContext(SearchContext);
  const [address, setAddress] = useState("");
  if (searchLoading) return "Loading page...";
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFood(address);
    // setAddress("");
  };
  return (
    <main className="main-search">
      <div className="search-bar">
        <img src="/image/icon/search.svg" alt="search" className="search-img" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Tìm theo địa chỉ"
            className="search-text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </form>
      </div>
      <div className="swiper-container">
        <SwiperSlide />
      </div>
      <ul className="breadcrumb">
        <li>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li>Nhà hàng</li>
      </ul>
      <Food name="Nhà hàng gần bạn" quanAn={quanAn} />
    </main>
  );
};

export default SearchPage;
