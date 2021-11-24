const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = Schema({
  userid: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
  tenquan: {
    type: String,
    required: true,
  },
  restaurantid: {
    type: String,
    required: true,
  },
  sellerid: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("cart", CartSchema);
