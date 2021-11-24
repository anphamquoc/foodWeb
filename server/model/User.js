const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hoten: {
    type: String,
  },
  diachi: {
    type: String,
  },
  sodt: {
    type: String,
  },
  ngdk: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "client",
  },
});

module.exports = mongoose.model("users", UserSchema);
