import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Store from "./Store";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cartState: { cartProduct, cartProductLoading },
  } = useContext(CartContext);
  if (cartProductLoading) return "Loading...";
  const total = cartProduct.reduce(
    (total, c) => c.quantity * c.price + total,
    0
  );
  return (
    <main className="cart">
      {cartProduct === null || cartProduct.length === 0 ? (
        <h1>Không có món nào trong giỏ hàng</h1>
      ) : (
        <>
          <h1 className="title">Giỏ hàng</h1>
          <div className="time">
            <img src="/image/icon/icon-clock.svg" alt="time" />
            <span>Thời gian giao: 22 phút( Cách bạn 2.2km)</span>
          </div>
          <div className="swiper-container">
            <div className="swiper-slide">
              <Store cart={cartProduct} />
            </div>
          </div>

          <div className="thanhtoan">
            <div className="price">
              <p className="tongcong">Tổng cộng</p>
              <span>{total}đ</span>
            </div>
            <div className="dathang">
              {cartProduct.length > 0 && (
                <NavLink to={"/checkout"} className="xemlaidon">
                  Thanh toán
                </NavLink>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
