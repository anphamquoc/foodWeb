import React from "react";
import Header from "components/main/Header";
import User from "components/admin/User/User";
import UserContextProvider from "context/Admin/UserContext";
import "./User.scss";

const UserView = () => {
  return (
    <UserContextProvider>
      <Header />
      <User />
    </UserContextProvider>
  );
};

export default UserView;
