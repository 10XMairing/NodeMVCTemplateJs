const parser = require("body-parser");
const morgan = require("morgan");
const logger = require("../module/logger-module");
const routers = require("../routes");

// app should be an instance of the express application

module.exports = async function(app) {
  try {
    app.set("view engine", "ejs");
    // set views folder
    app.set("views", "./src/views");

    app.use(parser.urlencoded({ extended: true }));
    app.use(parser.json());

    app.use(morgan("combined"));

    // set routes
    app.use(routers);
  } catch (err) {
    logger.error("Error loading express dependencies");
    logger.error(err);
    throw err;
  }
};
