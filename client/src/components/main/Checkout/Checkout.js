import { AuthContext } from "context/AuthContext";
import React, { useContext, useState } from "react";
// import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/CartContext";
import CheckoutSuccess from "./CheckoutSuccess";
import { PaymentContext } from "context/PaymentContext";
import Item from "./Item";
const Checkout = () => {
  const {
    cartState: { cartProduct, cartProductLoading },
  } = useContext(CartContext);
  const { checkoutSuccess } = useContext(PaymentContext);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  if (cartProductLoading) return "Loading...";
  const total = cartProduct.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const handleSuccess = () => {
    setSuccess(true);
    checkoutSuccess(cartProduct, total, cartProduct[0].tenquan);
  };
  if (success) {
    return <CheckoutSuccess />;
  }
  return (
    <main className="checkout">
      {cartProduct.length > 0 ? (
        <>
          <div className="checkout-header">
            <h1>Bước cuối cùng - Thanh toán</h1>
            {/* <h3>{cartProduct[0].tenquan}</h3> */}
          </div>
          <div className="checkout-body">
            <div className="checkout-address">
              <h3>Giao đến</h3>
              <hr />
              <div className="time">
                <p>Thời gian giao hàng</p>
                <h6>18 phút (1km)</h6>
              </div>
              <div className="address">
                <div className="input-area">
                  <label htmlFor="address">Họ tên người đặt hàng</label>
                  <input type="text" name="name" value={user.hoten} disabled />
                </div>
                <div className="input-area">
                  <label htmlFor="address">Chi tiết địa chỉ</label>
                  <input type="text" name="name" value={user.diachi} disabled />
                </div>
                <div className="input-area">
                  <label htmlFor="address">Số điện thoại</label>
                  <input type="text" name="name" value={user.sodt} disabled />
                </div>
              </div>
            </div>
            <div className="details">
              <h3>Chi tiết thanh toán</h3>
              <hr />
              <div className="input-area">
                <label htmlFor="phuongthuc">Phương thức thanh toán</label>
                <input
                  type="text"
                  name="phuongthuc"
                  value={"Tiền mặt"}
                  disabled
                />
              </div>
              <div className="input-area">
                <label htmlFor="phuongthuc">Phí vận chuyển</label>
                <input type="text" name="phuongthuc" value={20000} disabled />
              </div>
            </div>
            <div className="order">
              <h3>Tóm tắt đơn hàng</h3>
              <div className="items">
                <hr />
                {cartProduct.map((item, index) => {
                  return <Item item={item} key={index} />;
                })}
              </div>
            </div>
          </div>

          <div className="total">
            <div className="total-description">
              <h5>Tổng cộng</h5>
              <p>{total + 20000}</p>
            </div>
            <button
              onClick={handleSuccess}
              className="btn"
              disabled={user.hoten === undefined}
            >
              {user.hoten === undefined
                ? "Vui lòng cập nhật thông tin"
                : "Thanh toán"}
            </button>
          </div>
        </>
      ) : (
        <h1>Không có món nào để thanh toán</h1>
      )}
    </main>
  );
};

export default Checkout;
