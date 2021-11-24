import React from "react";
import FoodSlide from "./FoodSlide";

const Food = ({ name, quanAn }) => {
  return (
    <div className="food">
      <h1 className="title">{name}</h1>
      <div className="food-container">
        {quanAn.map((quan, index) => {
          return <FoodSlide quan={quan} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Food;
