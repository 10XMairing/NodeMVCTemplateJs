const mongoose = require("mongoose");

//Define a schema
const UserSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("User", UserSchema);
