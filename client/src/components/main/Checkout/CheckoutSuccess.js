import { PaymentContext } from "context/PaymentContext";
import React, { useContext } from "react";
const CheckoutSuccess = () => {
  const {
    paymentState: { loadPayment },
  } = useContext(PaymentContext);
  if (loadPayment) return "Đang xác nhận thanh toán...";
  return (
    <main className="checkout">
      <div className="checkout-header">
        <h1>Thanh toán thành công</h1>
      </div>
    </main>
  );
};

export default CheckoutSuccess;
