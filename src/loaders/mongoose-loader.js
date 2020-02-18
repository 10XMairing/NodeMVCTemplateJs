const mongoose = require("mongoose");
const logger = require("../module/logger-module");

const url = "mongodb://localhost:27017/codingclubdev";

module.exports = async function() {
  try {
    return await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    logger.error("Error connecting mongoose db");
    logger.error(err);
    throw err();
  }
};
