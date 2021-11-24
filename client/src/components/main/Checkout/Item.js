import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item">
      <p className="quantity">{item.quantity}</p>
      <div className="item-description">
        <img src={`/${item.url}`} alt="mon an" />
        <p>{item.name}</p>
      </div>
      <p className="price">{item.price * item.quantity}</p>
    </div>
  );
};

export default Item;
