const userService = require("../services/user-service");
const logger = require("../module/logger-module");

module.exports.getUsers = async function(req, res, next) {
  const users = await userService.getAllUsers();
  logger.debug(users);

  return res.render("./user-home", { users });
};

module.exports.createNewUser = async function(req, res, next) {
  const name = req.body.name || "unknown";

  await userService.createUser(name);

  res.redirect("/user");
};
