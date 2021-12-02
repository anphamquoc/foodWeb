require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const authRouter = require("./routers/auth");
const QuanAnRouter = require("./routers/quanAn");
const LoaiMonAnRouter = require("./routers/loaiMonAn");
const MonAnRouter = require("./routers/monAn");
const CartRouter = require("./routers/cart");
const SearchRouter = require("./routers/search");
const PaymentRouter = require("./routers/payment");
const S_RestaurantRouter = require("./routers/Seller/quanAn");
const S_FoodRouter = require("./routers/Seller/monAn");
const S_OrderRouter = require("./routers/Seller/order");
const UserRouter = require("./routers/Admin/user");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect success");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
app.use(express.json());
app.use(cors());
app.use(methodOverride("X-HTTP-Method-Override"));
app.get("/", (req, res) => {
  res.json("success");
});
app.use("/user", authRouter);
app.use("/quanan", QuanAnRouter);
app.use("/loaimonan", LoaiMonAnRouter);
app.use("/monan", MonAnRouter);
app.use("/cart", CartRouter);
app.use("/search", SearchRouter);
app.use("/payment", PaymentRouter);
//seller
app.use("/seller/restaurant", S_RestaurantRouter);
app.use("/seller/food", S_FoodRouter);
app.use("/seller/payment", S_OrderRouter);
//admin
app.use("/admin/users", UserRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start at ${PORT}`));
