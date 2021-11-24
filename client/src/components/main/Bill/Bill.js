import { PaymentContext } from "context/PaymentContext";
import React, { useContext } from "react";
import Item from "./Item";

const Bill = () => {
  const {
    paymentState: { allPayment, loadingAllPayment },
  } = useContext(PaymentContext);
  if (loadingAllPayment) return "Loading...";
  console.log(allPayment);
  return (
    <main className="bill">
      {allPayment === null || allPayment.length === 0 ? (
        <h1>Bạn hiện chưa thanh toán hóa đơn nào</h1>
      ) : (
        <>
          <h1>Thông tin hóa đơn</h1>
          <div className="items">
            {allPayment.map((bill, index) => (
              <Item bill={bill} key={index} value={index + 1} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Bill;
