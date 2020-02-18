const winston = require("winston");
const config = require("../config/index.js");
const transports = [];
if (process.env.NODE_ENV != "development") {
  transports.push(
    new winston.transports.File({
      filename: `logs/logger.log`,
      handleExceptions: true,
      level: "debug",
      maxsize: 5242880,
      maxFiles: 5
    })
  );
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
        winston.format.colorize(),
        winston.format.combine()
      )
    })
  );
}

const LoggerInstance = winston.createLogger({
  level: config.LOG_LEVEL,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});
module.exports = LoggerInstance;
