const mongoose = require("mongoose");


// this is scheema

const RecordSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  Date: {
    type: Date,
    required: true,
  },
  Namaz: {
    type: Array,
    default: [0,0,0,0,0],
  }
});

module.exports = mongoose.model("Record", RecordSchema);
