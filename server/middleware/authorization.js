const verifySeller = (permission) => {
  return (req, res, next) => {
    const role = req.role;
    if (!permission.includes(role)) {
      return res.json({
        success: false,
        message: "Không có quyền để vào trang này",
      });
    }
    next();
  };
};

const verifyAdmin = async (req, res, next) => {
  const role = req.role;
  if (role !== "admin") {
    return res.json({
      success: false,
      message: "Không có quyền để vào trang này",
    });
  }
  next();
};

module.exports = {
  verifyAdmin,
  verifySeller,
};
