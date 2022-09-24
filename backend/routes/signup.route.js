const { Router } = require("express");
const signupRouter = Router();
const bcrypt = require("bcrypt");
const SignupModel = require("../models/signup.model");

signupRouter.post("/", async (req, res) => {
  const { name, email, password, age } = req.body;
  let hashedPassword = await bcrypt.hash(password, 6);
  try {
    await SignupModel.insertMany([
      { name, email, passsword: hashedPassword, age },
    ]);
    res.send("Signup Successful");
  } catch (err) {
    res.send(err);
  }
});

module.exports = signupRouter;
