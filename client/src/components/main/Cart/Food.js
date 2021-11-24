import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Food = ({ info }) => {
  const [quantity, setQuantity] = useState(info.quantity);
  const { deleteProduct, updateQuantity } = useContext(CartContext);

  const Delete = () => {
    deleteProduct(info._id);
  };
  const handleIncrease = () => {
    updateQuantity(info._id, quantity + 1);
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    updateQuantity(info._id, quantity - 1 > 0 ? quantity - 1 : 1);
    setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);
  };
  return (
    <div className="food1">
      <div className="sub" onClick={handleDecrease}>
        <img src="/image/icon/icon-minus-bordered.svg" alt="subtraction" />
      </div>
      <span className="quantity">{quantity}</span>
      <div className="add" onClick={handleIncrease}>
        <img src="/image/icon/icon-plus-bordered.svg" alt="addition" />
      </div>
      <div className="monan">
        <img src={`/${info.url}`} alt="cơm gà xiên que" />
      </div>
      <div className="foodname">
        <span className="tenmonan">{info.name}</span>
        <span className="price">{quantity * info.price}đ</span>
        <span className="action" onClick={Delete}>
          <img src="/image/icon/trash_icon.svg" alt="trash_icon" />
        </span>
      </div>
    </div>
  );
};

export default Food;
