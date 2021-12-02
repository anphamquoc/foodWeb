import React from "react";
import { Modal, Button } from "react-bootstrap";

const Check = ({ showCheck, setShowCheck, handleDelete }) => {
  return (
    <Modal onHide={() => setShowCheck(false)} show={showCheck}>
      <Modal.Header closeButton>
        <Modal.Title>Xóa nhà hàng</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Bạn có muốn xóa nhà hàng này?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCheck(false)}>
          Không
        </Button>
        <Button variant="primary" onClick={() => handleDelete()}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Check;
