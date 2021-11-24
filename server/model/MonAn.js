const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonAnSchema = Schema({
  maqa: {
    type: String,
    required: true,
  },
  tenmonan: {
    type: String,
    required: true,
  },
  gia: {
    type: Number,
    required: true,
  },
  urlhinhanh: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("monan", MonAnSchema);
