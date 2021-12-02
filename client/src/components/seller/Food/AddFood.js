import { FoodSContext } from "context/Seller/FoodSContext";
import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddFood = ({ show, setShow }) => {
  const { addFood } = useContext(FoodSContext);
  const [food, setFood] = useState({});
  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    addFood(food);
    setShow(false);
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Thông tin quán ăn cần thêm</Modal.Title>
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
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Thêm món ăn
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFood;
