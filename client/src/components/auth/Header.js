import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="login">
      <NavLink to="/">
        <img src="/image/icon/logo.png" alt="logo" />
      </NavLink>
    </header>
  );
};

export default Header;
