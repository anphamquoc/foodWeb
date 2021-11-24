const verifyAdmin = (permission) => {
  return (req, res, next) => {
    const role = req.role;
    if (permission.includes(role)) {
      next();
    }
    return res.json({
      success: false,
      message: "Không có quyền để vào trang này",
    });
  };
};

module.exports = verifyAdmin;
