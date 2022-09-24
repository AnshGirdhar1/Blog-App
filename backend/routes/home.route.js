const { Router } = require("express");
const authentication = require("../middlewares/authentication");
const ProfileModel = require("../models/profile.model");
const homeRouter = Router();

homeRouter.get("/", authentication, async (req, res) => {
  const { userId } = req.body;
  const {page} = req.query;
  try {
    const data = await ProfileModel.find({ userId: { $ne: userId } }).limit(40).skip((page-1)*40);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.send("Something Went Wrong");
  }
});

module.exports = homeRouter;
