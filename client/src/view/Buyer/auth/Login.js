import React from "react";
import Header from "../../../components/auth/Header";
import Body from "../../../components/auth/Body";
import "./style-login.css";

const Login = () => {
  return (
    <>
      <Header />
      <Body login={true} />
    </>
  );
};

export default Login;
