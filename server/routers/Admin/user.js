const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth");
const { verifyAdmin } = require("../../middleware/authorization");
const User = require("../../model/User");
const mongoose = require("mongoose");

router.get("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ success: true, users });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.put("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { role } = req.body;
  const { id } = req.params;
  try {
    const userUpdate = await User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      {
        $set: {
          role: role,
        },
      },
      {
        new: true,
      }
    );
    return res.json({ success: true, userUpdate });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(mongoose.Types.ObjectId(id));
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

module.exports = router;
