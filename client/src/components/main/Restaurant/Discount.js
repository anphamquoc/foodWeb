import React from "react";

const Discount = () => {
  return (
    <div className="discount">
      <img
        src="/image/icon/icon-promo-tag.svg"
        alt="discount"
        className="discount-icon"
      />
      <span className="discount-text">
        Giảm 10.000₫ phí giao hàng khi đặt đơn tối thiểu 80.000₫
      </span>
    </div>
  );
};

export default Discount;
