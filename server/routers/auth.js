const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.put("/", verifyToken, async (req, res) => {
  const { name, address, phoneNumber } = req.body;
  const id = req.userId;
  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: { hoten: name, diachi: address, sodt: phoneNumber } },
      { new: true }
    );
    return res.json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return res.json({
        success: false,
        message: "Đã có người đăng kí với tài khoản này",
        user,
      });
    }
    const hashPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashPassword,
    });
    await newUser.save();
    const accessToken = generateAccessToken(newUser);
    const refreshToken = await jwt.sign(
      { userId: newUser._id },
      process.env.REFRESH_TOKEN_SECRET
    );
    return res.json({
      success: true,
      accessToken,
      refreshToken,
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.json({ success: false, message: "Không có tài khoản này" });
    }
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res.json({ success: false, message: "Sai mật khẩu" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = await jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET
    );
    return res.json({ success: true, user, accessToken, refreshToken });
  } catch (error) {
    console.log(error.message);
  }
});

function generateAccessToken(user) {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
}

module.exports = router;
