import React, { useState, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Body = ({ login }) => {
  //manage context
  const {
    loginUser,
    registerUser,
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  //manage variables
  const [wrongAlert, setWrongAlert] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const check = login
    ? userName !== "" && password !== ""
    : password !== "" && userName !== "" && repassword === password;
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (login) {
        const data = loginUser({ username: userName, password });
        data.then((result) => {
          setWrongAlert(result.message);
        });
      } else {
        const data = registerUser({
          username: userName,
          password: password,
        });
        data.then((result) => {
          setWrongAlert(result.message);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <main className="info-user">
      <div className="login-text">
        <div className="login-text-head">
          <h4>Đăng {login === true ? "nhập" : "ký"} vào GoodFood</h4>
          <img src="image/icon/lock.svg" alt="lock icon" />
        </div>
        <p className="description">Nhập tài khoản của bạn</p>
      </div>
      <form className="form-login" onSubmit={handleSubmit}>
        {wrongAlert && (
          <input
            type="text"
            value={wrongAlert}
            disabled
            className="input-area wrong"
          />
        )}
        <input
          type="text"
          name="username"
          className="input-area"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="input-area"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {login === false && (
          <input
            type="password"
            name="re-password"
            className="input-area"
            placeholder="rewrite password"
            onChange={(e) => setRepassword(e.target.value)}
          />
        )}
        <input
          type="submit"
          value={"Tiếp tục"}
          className={check === true ? "submit-btn active" : "submit-btn"}
          disabled={!check}
        />
      </form>
      <p className="verify-account">
        Khi bấm tiếp tục, bạn đã đồng ý điều khoản và dịch vụ của chúng tôi
      </p>
      {login === false ? (
        <p className="handlebtn">
          Đã có tài khoản, <NavLink to="/login">Đăng nhập</NavLink>.
        </p>
      ) : (
        <p className="handlebtn">
          Không có tài khoản,
          <NavLink to="/register"> Đăng ký</NavLink>.
        </p>
      )}
    </main>
  );
};

export default Body;
