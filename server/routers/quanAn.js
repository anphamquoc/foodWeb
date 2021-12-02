const express = require("express");
const router = express.Router();
const QuanAn = require("../model/QuanAn");
const verifyToken = require("../middleware/auth");
const mongoose = require("mongoose");
const { verifySeller } = require("../middleware/authorization");
router.get("/", async (req, res) => {
  try {
    const quanAn = await QuanAn.find();
    return res.json({ success: true, quanAn });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const quanAn = await QuanAn.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "loaimonans",
          localField: "loaimonan",
          foreignField: "_id",
          as: "loaimonan",
        },
      },
    ]);
    return res.json({ success: true, quanAn });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.post(
  "/",
  verifyToken,
  verifySeller(["seller", "admin"]),
  async (req, res) => {
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
    try {
      const newQA = new QuanAn({
        matp,
        tenqa,
        diachi,
        loaimonan,
        dienthoai,
        thoigianphucvu,
        dattoithieu,
        nguoisohuu: req.userId,
        urlhinhanh,
      });
      await newQA.save();
      return res.json({ success: true, message: "Tao quan thanh cong", newQA });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
);

module.exports = router;
