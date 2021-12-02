import { UserContext } from "context/Admin/UserContext";
import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import Item from "./Item";

const User = () => {
  const {
    userState: { users, userLoading },
  } = useContext(UserContext);
  if (userLoading) return "Loading...";
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Họ tên</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Username</th>
          <th>Vai trò</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <Item user={user} key={i} />
        ))}
      </tbody>
    </Table>
  );
};

export default User;
