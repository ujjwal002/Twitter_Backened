const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/twitter_Dev");
};

module.exports = connection;
