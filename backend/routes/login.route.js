const { Router } = require("express");
const loginRouter = Router();
const SignupModel = require("../models/signup.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await SignupModel.findOne({ email });
  if (user) {
    const isValid = await bcrypt.compare(password, user.passsword);
    if (isValid) {
      const token = jwt.sign({ userId: user._id }, "secret");
      res.send(token);
    } else {
      res.send("Invalid Credentials");
    }
  } else {
    res.send("No User Found");
  }
});

module.exports = loginRouter;
