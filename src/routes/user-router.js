const express = require("express");

const router = express.Router();
const controller = require("../controllers/user-controller");

router.get("/", (req, res, next) => {
  controller.getUsers(req, res, next);
});

router.post("/new", (req, res, next) => {
  controller.createNewUser(req, res, next);
});

module.exports = router;
