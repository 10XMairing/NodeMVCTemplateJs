const User = require("../model/User");

module.exports.getAllUsers = async function() {
  return await User.find();
};

module.exports.createUser = async function(name) {
  const doc = await User.create({ name });

  return doc;
};
