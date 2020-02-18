const mongLoad = require("./mongoose-loader");
const logger = require("../module/logger-module");
const expressLoader = require("./express-loader");
const configChecker = require("./config-checker");

// must be an express application
module.exports = async function(app) {
  try {
    await configChecker();

    logger.info("All config variables fullfilled");

    await mongLoad();

    logger.info("mongoose loaded successfully");

    await expressLoader(app);

    logger.info("express loaded successfully");
  } catch (err) {
    logger.error("Failed to load dependencies\n Exiting Server......");

    throw err;
  }
};
