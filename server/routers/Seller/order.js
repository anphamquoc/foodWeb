const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth");
const { verifySeller } = require("../../middleware/authorization");
const Payment = require("../../model/Payment");
router.get(
  "/",
  verifyToken,
  verifySeller(["admin", "seller"]),
  async (req, res) => {
    try {
      const order = await Payment.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userid",
            foreignField: "_id",
            as: "userInfo",
          },
        },
      ]);
      return res.json({ success: true, order });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  }
);

module.exports = router;
