const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = Schema({
  cartid: {
    type: Array,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("payment", PaymentSchema);
