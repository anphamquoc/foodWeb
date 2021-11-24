import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { AuthContext } from "../../../context/AuthContext";
import { FoodContext } from "../../../context/FoodContext";
import { Offcanvas } from "react-bootstrap";
const FoodPage = ({ show, handleClose, food }) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const {
    cartState: { cartProduct, cartProductLoading },
    addToCart,
  } = useContext(CartContext);
  const {
    foodState: { restaurant },
  } = useContext(FoodContext);
  const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    const newProduct = {
      url: food.urlhinhanh,
      name: food.tenmonan,
      price: food.gia,
      quantity,
      tenquan: restaurant[0].tenqa,
      restaurantId: food.maqa,
      sellerId: restaurant[0].nguoisohuu,
    };
    addToCart(newProduct, food._id);
  };
  if (isAuthenticated && cartProductLoading) return "Loading...";
  const checkProduct = isAuthenticated
    ? cartProduct.filter((cart) => cart.productid === food._id).length > 0
    : true;
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Thông tin món ăn</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div class="info">
          <div class="picture-food">
            <img src={`/${food.urlhinhanh}`} alt="" />
            <p class="food">{food.tenmonan}</p>
          </div>
          <div class="price">{food.gia}đ</div>
        </div>
        <div class="selection">
          <div class="lastSelection">
            <div class="header">
              <h3 class="Title">Special instructions</h3>
              <h6 class="Subtitle">Optional</h6>
            </div>
            <input placeholder="E.g. No onions please" class="inputTextArea" />
          </div>
        </div>
      </Offcanvas.Body>
      <div class="offcanvas-footer">
        <div class="itemQuantity">
          <button
            onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)}
          >
            <img src="/image/icon/icon-minus-bordered.svg" alt="" />
          </button>
          <div class="number">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <img src="/image/icon/icon-plus-bordered.svg" alt="" />
          </button>
        </div>
        <button className="btn" disabled={checkProduct} onClick={addProduct}>
          {isAuthenticated
            ? checkProduct
              ? `Đã có trong giỏ hàng`
              : `Thêm vào giỏ hàng - ${food.gia * quantity}đ`
            : "Vui lòng đăng nhập"}
        </button>
      </div>
    </Offcanvas>
  );
};

export default FoodPage;
