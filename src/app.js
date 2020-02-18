const express = require("express");
const app = express();
const logger = require("./module/logger-module");
const loader = require("./loaders");

async function load(app) {
  try {
    logger.info(
      `Attemting to load the app server in ${process.env.NODE_ENV} mode`
    );

    await loader(app);

    logger.info("All dependencies fullfilled");
    logger.info("Express app is ready");

    return app;
  } catch (err) {
    logger.error("Failed to load express");
    logger.error(err);

    process.exit(1);
  }
}

module.exports = async function() {
  // this return an express app after loading the dependencies
  await load(app);
  return app;
};
