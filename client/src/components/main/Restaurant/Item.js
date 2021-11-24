import React, { useState } from "react";
import CartContextProvider from "../../../context/CartContext";
import FoodPage from "./FoodPage";

const Item = ({ food }) => {
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <div className="item" onClick={handleShow}>
        <img src={`/${food.urlhinhanh}`} alt="mon an" />
        <div className="description">
          <h3>{food.tenmonan}</h3>
          <h6 className="item-desciprtion">{food.gia}đ</h6>
        </div>
      </div>
      <CartContextProvider>
        <FoodPage show={show} handleClose={handleClose} food={food} />
      </CartContextProvider>
    </>
  );
};

export default Item;
