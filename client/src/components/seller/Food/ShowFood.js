import { FoodSContext } from "context/Seller/FoodSContext";
import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ShowFood = ({ show, setShow, initialFood }) => {
  const [food, setFood] = useState({
    tenmonan: initialFood.tenmonan,
    gia: initialFood.gia,
    urlhinhanh: initialFood.urlhinhanh,
  });
  const { updateFood } = useContext(FoodSContext);
  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    updateFood(initialFood._id, food);
    setShow(false);
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Thay đổi thông tin món ăn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên món ăn</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tên món ăn"
              name={"tenmonan"}
              onChange={handleChange}
              required
              value={food.tenmonan}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="text"
              placeholder="Giá món ăn"
              name={"gia"}
              onChange={handleChange}
              required
              value={food.gia}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Url hình ảnh</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập url hình ảnh món ăn"
              name={"urlhinhanh"}
              onChange={handleChange}
              required
              value={food.urlhinhanh}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Thay đổi thông tin
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowFood;
