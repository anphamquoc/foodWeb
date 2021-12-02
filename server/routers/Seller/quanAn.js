const express = require("express");
const router = express.Router();
const QuanAn = require("../../model/QuanAn");
const verifyToken = require("../../middleware/auth");
const { verifySeller } = require("../../middleware/authorization");
const mongoose = require("mongoose");
router.get(
  "/",
  verifyToken,
  verifySeller(["seller", "admin"]),
  async (req, res) => {
    try {
      const userId = req.userId;
      const quanAn = await QuanAn.find({ nguoisohuu: userId });
      return res.json({ success: true, quanAn });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);

router.put(
  "/:id",
  verifyToken,
  verifySeller(["admin", "seller"]),
  async (req, res) => {
    try {
      const id = req.params.id;
      const {
        matp,
        loaimonan,
        tenqa,
        diachi,
        dienthoai,
        thoigianphucvu,
        dattoithieu,
        urlhinhanh,
      } = req.body;
      const quanAn = await QuanAn.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(id) },
        {
          $set: {
            matp,
            loaimonan,
            tenqa,
            diachi,
            dienthoai,
            thoigianphucvu,
            dattoithieu,
            urlhinhanh,
          },
        },
        { new: true }
      );
      return res.json({ success: true, quanAn });
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
      const quanAn = await QuanAn.findByIdAndDelete(
        mongoose.Types.ObjectId(id)
      );
      return res.json({ success: true, quanAn });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  }
);

module.exports = router;
