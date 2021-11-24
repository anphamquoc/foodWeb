import React from "react";
import Description from "./Description";

const Item = ({ value, bill }) => {
  return (
    <div className="item">
      <h3>Thông tin hóa đơn {value}</h3>
      <div className="all-food">
        {bill.cartid.map((cart, index) => (
          <Description key={index} cart={cart} />
        ))}
      </div>
      <h5 className="total">
        Tổng cộng: <span>{bill.total}đ</span>
      </h5>
    </div>
  );
};

export default Item;
