import React, { useState, useContext } from "react";
import ShowFood from "./ShowFood";
import Check from "./Check";
import { FoodSContext } from "context/Seller/FoodSContext";

const Item = ({ food }) => {
  const [show, setShow] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const { deleteFood } = useContext(FoodSContext);
  const handleDelete = () => {
    deleteFood(food._id);
    setShowCheck(false);
  };
  return (
    <>
      <ShowFood show={show} setShow={setShow} initialFood={food} />
      <Check
        showCheck={showCheck}
        setShowCheck={setShowCheck}
        handleDelete={handleDelete}
      />
      <div className="item">
        <span className="delete-icon" onClick={() => setShowCheck(true)}>
          <img src="/image/icon/delete.png" alt="delete" />
        </span>
        <div
          onClick={() => setShow(true)}
          style={{ display: "flex", gap: "20px" }}
        >
          <img src={`/${food.urlhinhanh}`} alt="mon an" />
          <div className="description">
            <h3>{food.tenmonan}</h3>
            <h6 className="item-desciprtion">{food.gia}đ</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
