const express = require("express");
const router = express.Router();
const MonAn = require("../model/MonAn");
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const monAn = await MonAn.find({ maqa: id });
    return res.json({ success: true, monAn: monAn });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const { tenmonan, gia, urlhinhanh } = req.body;
  try {
    const monAn = new MonAn({
      maqa: id,
      tenmonan,
      gia,
      urlhinhanh,
    });
    await monAn.save();
    return res.json({ success: true, monAn });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
