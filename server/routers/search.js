const express = require("express");
const router = express.Router();
const QuanAn = require("../model/QuanAn");
const mongoose = require("mongoose");

router.get("/:filter", async (req, res) => {
  const filter = req.params.filter;
  let quanAn = null;
  try {
    if (mongoose.Types.ObjectId.isValid(filter)) {
      quanAn = await QuanAn.aggregate([
        { $match: { loaimonan: mongoose.Types.ObjectId(filter) } },
        {
          $lookup: {
            from: "loaimonans",
            localField: "loaimonan",
            foreignField: "_id",
            as: "tenloaimonan",
          },
        },
      ]);
    } else {
      quanAn = await QuanAn.aggregate([
        { $match: { diachi: filter } },
        {
          $lookup: {
            from: "loaimonans",
            localField: "loaimonan",
            foreignField: "_id",
            as: "tenloaimonan",
          },
        },
      ]);
    }
    return res.json({ success: true, quanAn });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
module.exports = router;
