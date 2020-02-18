const router = require("express").Router();

const userRouter = require("./user-router");

router.use("/user", userRouter);

router.get("/", (req, res, next) => {
  res.send("<a href='/user'> <h3>users</h3> </a>");
});

module.exports = router;
