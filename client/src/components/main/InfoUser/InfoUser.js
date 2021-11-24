import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
const InfoUser = () => {
  //manage context
  //manage variables
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });
  const {
    authState: { authLoading, user },
    changeUserStatus,
    setChangeUserStatus,
    changeUser,
  } = useContext(AuthContext);
  useEffect(() => {
    setInfo({
      name: authLoading === false && user.hoten !== undefined ? user.hoten : "",
      address:
        authLoading === false && user.diachi !== undefined ? user.diachi : "",
      phoneNumber:
        authLoading === false && user.sodt !== undefined ? user.sodt : "",
    });
    return () => {
      setInfo({
        name: "",
        address: "",
        phoneNumber: "",
      });
    };
  }, [authLoading, user]);
  if (changeUserStatus) {
    setTimeout(() => {
      setChangeUserStatus(false);
    }, 1000);
  }
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeUser(info);
  };
  return (
    <main className="info-user">
      <div className="login-text">
        <div className="login-text-head">
          <h4>Thông tin người dùng</h4>
          <img src="/image/icon/lock.svg" alt="lock icon" />
        </div>
        <p className="description">Thay đổi thông tin của bạn</p>
      </div>
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          value={info.address}
          className="input-area"
          placeholder="Nhập địa chỉ của bạn"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          value={info.name}
          className="input-area"
          placeholder="Nhập họ tên của bạn"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={info.phoneNumber}
          className="input-area"
          placeholder="Nhập số điện thoại của bạn"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn active">
          {changeUserStatus === true ? "Thay đổi thành công" : "Thay đổi"}
        </button>
      </form>
    </main>
  );
};

export default InfoUser;
