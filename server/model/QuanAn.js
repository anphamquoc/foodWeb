const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuanAnSchema = Schema({
  matp: {
    type: Number,
    required: true,
  },
  tenqa: {
    type: String,
    required: true,
  },
  loaimonan: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  diachi: {
    type: String,
    required: true,
  },
  dienthoai: {
    type: String,
    required: true,
  },
  thoigianphucvu: {
    type: String,
    required: true,
  },
  urlhinhanh: {
    type: String,
    required: true,
  },
  dattoithieu: {
    type: Number,
    required: true,
  },
  star: {
    type: Number,
    default: 5,
  },
  nguoisohuu: {
    type: String,
    required: true,
  },
  ngaydk: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quanan", QuanAnSchema);
