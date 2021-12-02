import { RestaurantSContext } from "context/Seller/RestaurantSContext";
import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ShowRestaurant = ({ show, setShow, initialRestaurant }) => {
  const [restaurant, setRestaurant] = useState(initialRestaurant);
  const { updateRestaurant } = useContext(RestaurantSContext);
  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRestaurant(restaurant._id, restaurant);
    setShow(false);
  };

  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin quán ăn cần thêm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Mã thành phố</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập mã thành phố nơi bạn ở"
                name="matp"
                onChange={handleChange}
                required
                value={restaurant.matp}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Loại món ăn</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập id loại món ăn"
                name={"loaimonan"}
                onChange={handleChange}
                required
                value={restaurant.loaimonan}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quán ăn</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên quán ăn"
                name={"tenqa"}
                onChange={handleChange}
                required
                value={restaurant.tenqa}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                name={"diachi"}
                onChange={handleChange}
                required
                value={restaurant.diachi}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập số điện thoại của bạn"
                name={"dienthoai"}
                onChange={handleChange}
                required
                value={restaurant.dienthoai}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Thời gian phục vụ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập thời gian phục vụ: hh:hh -> hh:hh"
                name={"thoigianphucvu"}
                required
                onChange={handleChange}
                value={restaurant.thoigianphucvu}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Đặt tối thiểu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số lượng đặt tối thiểu"
                name={"dattoithieu"}
                onChange={handleChange}
                required
                value={restaurant.dattoithieu}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Url hình ảnh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập url hình ảnh trang web"
                name={"urlhinhanh"}
                onChange={handleChange}
                required
                value={restaurant.urlhinhanh}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {restaurant ? "Cập nhật quán ăn" : "Thêm quán ăn"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowRestaurant;
