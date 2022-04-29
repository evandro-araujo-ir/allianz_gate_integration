var log4js = require("log4js");
var logger = log4js.getLogger();

log4js.configure({
  appenders: { cheese: { type: "file", filename: "logs/logs.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
})
logger.level = "debug";

module.exports = logger
