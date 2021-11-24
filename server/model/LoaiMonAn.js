const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoaiMonAnSchema = Schema({
  tenloai: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("loaimonan", LoaiMonAnSchema);
