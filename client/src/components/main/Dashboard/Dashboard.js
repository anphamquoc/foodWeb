import React from "react";
import Chart from "./Chart";
import { useQuery } from "@apollo/client";
import { LOAD_ALL_INFORMATION } from "graphql/Query";
import Item from "./Item";

const Dashboard = () => {
  const { data, loading, error } = useQuery(LOAD_ALL_INFORMATION);
  if (loading) return "Loading...";
  const totalMoney = error
    ? 0
    : data.getAllPayment.reduce((acc, item) => acc + item.total, 0);
  return (
    <main className="dashboard">
      {error ? (
        <h1>Không có quyền để vào trang này</h1>
      ) : (
        <>
          <h1>Thông tin của trang web</h1>
          <div className="achieve">
            <div className="items">
              <div className="item">
                <div className="border-icon">
                  <img src="/image/icon/icon-clock.svg" alt="icon" />
                </div>
                <div className="description">
                  <h6>{data.getAllRestaurant.length}</h6>
                  <span>Số lượng nhà hàng</span>
                </div>
              </div>
              <div className="item">
                <div className="border-icon">
                  <img src="/image/icon/icon-clock.svg" alt="icon" />
                </div>
                <div className="description">
                  <h6>{data.getAllFood.length}</h6>
                  <span>Số lượng món ăn</span>
                </div>
              </div>
              <div className="item">
                <div className="border-icon">
                  <img src="/image/icon/icon-clock.svg" alt="icon" />
                </div>
                <div className="description">
                  <h6>{totalMoney}</h6>
                  <span>Số tiền tất cả hóa đơn</span>
                </div>
              </div>
              <div className="item">
                <div className="border-icon">
                  <img src="/image/icon/icon-clock.svg" alt="icon" />
                </div>
                <div className="description">
                  <h6>{data.getAllPayment.length}</h6>
                  <span>Số lượng đơn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order">
            <div className="request-order">
              <h3>Đơn hàng người dùng đặt gần đây</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID đơn hàng</th>
                    <th>Tổng tiền</th>
                    <th>Tên nhà hàng</th>
                  </tr>
                </thead>
                <tbody>
                  {data.getAllPayment.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <img src={`/${item.cartid[0].url}`} alt="food" />{" "}
                        {item.id}
                      </td>
                      <td>{item.total}</td>
                      <td>{item.seller}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Chart user={data.getAllUser} />
          </div>
          <div className="your-food">
            <h3>Các món ăn đã thêm gần đây</h3>
            <div className="items">
              {data.getAllFood.map((food, i) => (
                <Item food={food} key={i} />
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
