const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth");
const { verifySeller } = require("../../middleware/authorization");
const mongoose = require("mongoose");
const MonAn = require("../../model/MonAn");
router.put(
  "/:id",
  verifyToken,
  verifySeller(["admin", "seller"]),
  async (req, res) => {
    const id = req.params.id;
    const { tenmonan, gia, urlhinhanh } = req.body;
    try {
      const monAn = await MonAn.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(id) },
        {
          $set: {
            tenmonan,
            gia,
            urlhinhanh,
          },
        },
        { new: true }
      );
      return res.json({ success: true, monAn });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  }
);

router.delete(
  "/:id",
  verifyToken,
  verifySeller(["admin", "seller"]),
  async (req, res) => {
    const id = req.params.id;
    try {
      const monAn = await MonAn.findByIdAndDelete(mongoose.Types.ObjectId(id));
      return res.json({ success: true, monAn });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  }
);

module.exports = router;
