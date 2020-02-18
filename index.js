const http = require("http");
const logger = require("./src/module/logger-module");
const appLoader = require("./src/app"); //returns a promise with an express app
const config = require("./src/config");

async function startServer() {
  const app = await appLoader();

  http.createServer(app).listen(config.PORT, () => {
    logger.info(`Listening on port http://localhost:${config.PORT}`);
  });
}

startServer();
