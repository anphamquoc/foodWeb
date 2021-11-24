import React from "react";

const Description = ({ cart }) => {
  return (
    <div className="description">
      <p className="quantity">{cart.quantity}</p>
      <div className="item-description">
        <img src={`/${cart.url}`} alt="mon an" />
        <p>{cart.name}</p>
      </div>
      <p className="price">{cart.quantity * cart.price}đ</p>
    </div>
  );
};

export default Description;
