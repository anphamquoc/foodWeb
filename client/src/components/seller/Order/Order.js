import React, { useContext } from "react";
import { OrderContext } from "context/Seller/OrderContext";
import { Table } from "react-bootstrap";
import { AuthContext } from "context/AuthContext";
const Order = () => {
  const {
    orderState: { orderLoading, orders },
  } = useContext(OrderContext);
  const {
    authState: { user },
  } = useContext(AuthContext);
  if (orderLoading) return "Loading...";
  const check = orders.filter((order) => order.cartid[0].sellerid === user._id);
  return (
    <main className="bill">
      {check.length === 0 ? (
        <h1>Hiện chưa có hóa đơn nào</h1>
      ) : (
        <>
          <h1>Thông tin tất cả hóa đơn</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Tên món</th>
                <th>Tổng giá</th>
              </tr>
            </thead>
            <tbody>
              {orders
                .filter((order) => order.cartid[0].sellerid === user._id)
                .map((order, i) => (
                  <tr key={i}>
                    <th>{order.userInfo[0].hoten}</th>
                    <th>{order.userInfo[0].diachi}</th>
                    <th>{order.userInfo[0].sodt}</th>
                    <th>
                      {order.cartid.map((order) => (
                        <p>{order.name}</p>
                      ))}
                    </th>
                    <th>{order.total}</th>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </main>
  );
};

export default Order;
