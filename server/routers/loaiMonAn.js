const express = require("express");
const router = express.Router();
const LoaiMonAn = require("../model/LoaiMonAn");
const verifyToken = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const loaiMonAn = await LoaiMonAn.find();
    return res.status(200).json({ success: true, loaiMonAn });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  const { tenloai, url } = req.body;
  try {
    const newLoai = new LoaiMonAn({
      tenloai,
      url,
    });
    await newLoai.save();
    return res.json({ success: true, message: "Them thanh cong" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
