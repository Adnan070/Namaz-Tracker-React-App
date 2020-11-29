const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  uid: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
