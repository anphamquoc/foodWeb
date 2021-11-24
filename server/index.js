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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start at ${PORT}`));
