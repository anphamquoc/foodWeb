import React from "react";

const Item = ({ food }) => {
  console.log(food);
  return (
    <div className="item">
      <img src={`/${food.urlhinhanh}`} alt="Mon an" />
      <div className="description">
        <p className="name">{food.tenmonan}</p>
        <span className="detail">{food.gia}</span>
      </div>
      {/* <div className="client-order">
        <p className="name">Số lượng đơn hàng </p>
        <span className="detail">10</span>
      </div>
      <div className="income">
        <p className="name">Tổng số tiền nhận được </p>
        <span className="detail">20000</span>
      </div> */}
    </div>
  );
};

export default Item;
