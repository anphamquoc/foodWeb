import { UserContext } from "context/Admin/UserContext";
import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Check from "./Check";

const Item = ({ user }) => {
  const { deleteUser, updateRole } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(user.role);
  const handleDelete = () => {
    deleteUser(user._id);
    setShow(false);
  };
  const updateRoleUser = (e) => {
    setRole(e.target.value);
    updateRole(user._id, e.target.value);
  };
  return (
    <>
      <Check
        showCheck={show}
        setShowCheck={setShow}
        handleDelete={handleDelete}
      />
      <tr>
        <td>{user.hoten}</td>
        <td>{user.diachi}</td>
        <td>{user.sodt}</td>
        <td>{user.username}</td>
        <td>
          <Form.Select
            aria-label="Default select example"
            onChange={updateRoleUser}
            name="role"
            value={role}
          >
            <option value="admin">admin</option>
            <option value="seller">seller</option>
            <option value="client">client</option>
          </Form.Select>
        </td>
        <td>
          <Button variant="danger" onClick={() => setShow(true)}>
            Xóa tài khoản
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Item;
