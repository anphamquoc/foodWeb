import React from "react";
import Food from "./Food";

const Store = ({ cart }) => {
  return (
    <div className="store1">
      {/* <h2 className="title2">
        {cart.length === 0 ? "Không có món trong giỏ hàng" : cart[0].tenquan}
      </h2> */}
      {cart.map((c, index) => {
        return <Food key={index} info={c} />;
      })}
    </div>
  );
};

export default Store;
