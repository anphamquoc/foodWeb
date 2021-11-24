import React from "react";
import Header from "../../../components/auth/Header";
import Body from "../../../components/auth/Body";
import "./style-login.css";

const Register = () => {
  return (
    <>
      <Header />
      <Body login={false} />
    </>
  );
};

export default Register;
