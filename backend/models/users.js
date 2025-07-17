const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  logo: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
