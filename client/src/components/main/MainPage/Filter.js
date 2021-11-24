import React from "react";
import { NavLink } from "react-router-dom";

const Filter = ({ id, name, url }) => {
  return (
    <NavLink to={`search/${id}`} className="category">
      <img src={`/${url}`} alt="ComTam" className="category-image" />
      <div className="category-text">{name}</div>
    </NavLink>
  );
};

export default Filter;
