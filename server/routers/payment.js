const express = require("express");
const router = express.Router();
const Payment = require("../model/Payment");
const Cart = require("../model/Cart");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, async (req, res) => {
  const userId = req.userId;
  try {
    const payment = await Payment.find({ userid: userId });
    return res.json({ success: true, payment });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  const { cartId, total, sellerId } = req.body;
  const userId = req.userId;
  try {
    const newPayment = new Payment({
      cartid: cartId,
      userid: userId,
      seller: sellerId,
      total,
      status: "pending",
    });
    await Cart.deleteMany({ _id: { $in: cartId } });
    await newPayment.save();
    return res.json({ success: true, newPayment });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

module.exports = router;
