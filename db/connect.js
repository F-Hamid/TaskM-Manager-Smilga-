const mongoose = require("mongoose");

connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
