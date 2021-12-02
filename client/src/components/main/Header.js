import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Offcanvas } from "react-bootstrap";
const Header = () => {
  const {
    authState: { user, isSeller },
    logoutUser,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => {
    logoutUser();
  };
  return (
    <>
      <header>
        <NavLink to="/" className="logo">
          <img
            src="/image/HatchfulExport-All/logo_transparent.png"
            alt="logo"
          />
        </NavLink>
        <div className="cart-login">
          <NavLink to="/cart" className="cart">
            <img src="/image/icon/shopping-bag.svg" alt="shopping-bag" />
          </NavLink>
          <div className="login">
            {user ? (
              <>
                <div className="login-btn" onClick={handleShow}>
                  {user.username[0].toUpperCase()}
                </div>
                <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Thông tin {user.name}</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <NavLink to={`/infoUser`} className="link">
                      Thông tin người dùng
                    </NavLink>
                    <NavLink to={`/bill`} className="link">
                      Thông tin hóa đơn
                    </NavLink>
                    {user.role === "admin" && (
                      <NavLink to={`/dashboard`} className="link">
                        Thông tin trang web
                      </NavLink>
                    )}
                    {isSeller && (
                      <>
                        <NavLink to={`/seller/restaurant`} className="link">
                          Thông tin nhà hàng của bạn
                        </NavLink>
                        <NavLink to={`/seller/order`} className="link">
                          Thông tin đơn hàng hiện có
                        </NavLink>
                      </>
                    )}
                    {user.role === "admin" && (
                      <>
                        <NavLink to={`/admin/user`} className="link">
                          Thông tin người dùng trang web
                        </NavLink>
                        <NavLink to={`/admin/restaurant`} className="link">
                          Thông tin tất cả nhà hàng
                        </NavLink>
                      </>
                    )}
                    <button className="link" onClick={logout}>
                      Đăng xuất
                    </button>
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            ) : (
              <NavLink to="/login" className="login-btn">
                Đăng nhập
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
