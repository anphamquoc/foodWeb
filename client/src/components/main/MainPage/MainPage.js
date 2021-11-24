import React, { useContext, useRef, useState } from "react";
import Filter from "./Filter";
import Swiper from "./Swiper";
import List from "./List";
import { RestaurantContext } from "../../../context/RestaurantContext";
import { Redirect } from "react-router-dom";
const MainPage = () => {
  const [address, setAddress] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [random] = useState(Math.round(Math.random() * 3 + 1));
  const ref = useRef();
  const {
    restaurantState: { restaurant, loadingRestaurant, filter, loadingFilter },
  } = useContext(RestaurantContext);
  //
  const redirectSearchPage = () => {
    setRedirect(address);
  };
  if (redirect) {
    return <Redirect to={`/search/${redirect}`} />;
  }
  return (
    <>
      <div
        className="background-body"
        style={{
          backgroundImage: `url(/image/background/background${random}.jpg)`,
        }}
        ref={ref}
      ></div>
      <div className="search-container">
        <h2 className="search-header">Chào buổi sáng</h2>
        <h1 className="search-content">Tìm kiếm các món ăn gần bạn</h1>
        <div className="location-input">
          <span className="location-icon">
            <img src="/image/icon/location.svg" alt="location" />
          </span>
          <input
            type="text"
            placeholder="Nhập địa chỉ của bạn"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="search-btn" onClick={redirectSearchPage}>
          Tìm kiếm
        </button>
      </div>
      <main className="main-page">
        <div className="main1">
          <h1 className="title">Mã khuyến mãi GoodFood phổ biến</h1>
          <div className="swiper-container">
            {!loadingRestaurant &&
              restaurant.map((res, index) => {
                return (
                  <Swiper
                    key={index}
                    restaurant={res}
                    time={"10 phút"}
                    distance={"15km"}
                    haveDiscount={true}
                    discountName={"Giảm 15K mã FREESHIPP"}
                  />
                );
              })}
          </div>
        </div>
        <div className="main2">
          <h1 className="title">Phân loại các món ăn</h1>
          <div className="categories">
            {!loadingFilter &&
              filter.map((filt, index) => {
                return (
                  <Filter
                    id={filt._id}
                    name={filt.tenloai}
                    url={filt.url}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
        <div className="main3">
          <h1 className="title">Tại sao nên lựa chọn GoodFood</h1>
          <ul className="why-goodfood-list">
            <List />
            <List />
          </ul>
        </div>
      </main>
    </>
  );
};

export default MainPage;
