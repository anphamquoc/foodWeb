const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = await req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.json({ success: false, message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.userId;
    if (decoded.exp > Date.now()) {
      return res.json({ success: false, message: "Token not found" });
    }
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: error.message });
  }
};

module.exports = verifyToken;
