const mongoose = require("mongoose");

const Mat = mongoose.model(
  "Mat",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Mat;
