import { AuthContext } from "context/AuthContext";
import { FoodSContext } from "context/Seller/FoodSContext";
import React, { useContext, useState } from "react";
import AddFood from "./AddFood";
import Item from "./Item";

const Food = () => {
  const [show, setShow] = useState(false);
  const {
    foodState: { foods, foodLoading },
  } = useContext(FoodSContext);
  const {
    authState: { isSeller },
  } = useContext(AuthContext);
  if (foodLoading) return "Loading...";
  return (
    <div className="food-seller">
      {!isSeller ? (
        <h1>Không có quyền để vào trang này</h1>
      ) : foods === null ? (
        <h1>Không có thông tin nhà hàng này</h1>
      ) : (
        <>
          <AddFood show={show} setShow={setShow} />
          <h1>Thông tin quán ăn</h1>
          <div className="items">
            <div className="item-add" onClick={() => setShow(true)}>
              <img src={`/image/icon/add_icon.png`} alt="mon an" />
            </div>
            {foods.map((food, index) => (
              <Item food={food} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Food;
