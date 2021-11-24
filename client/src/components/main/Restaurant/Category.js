import React from "react";
import Item from "./Item";

const Category = ({ name, food, foodLoading }) => {
  return (
    <div className="category">
      <h2 className="category-name">{name}</h2>
      <div className="items">
        {!foodLoading &&
          food.map((f, index) => {
            return <Item key={index} food={f} />;
          })}
      </div>
    </div>
  );
};

export default Category;
