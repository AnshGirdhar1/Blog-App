const { Router } = require("express");
const authentication = require("../middlewares/authentication");
const ProfileModel = require("../models/profile.model");
const profileRouter = Router();

profileRouter.get("/", authentication, async (req, res) => {
  try {
    let data = await ProfileModel.find({ userId: req.body.userId });
    res.send(data);
  } catch (e) {
    console.log(e);
    res.send("Something Went Wrong");
  }
});

profileRouter.post("/", authentication, async (req, res) => {
  try {
    await ProfileModel.insertMany([req.body]);
    res.send("Added SuccessFully");
  } catch (e) {
    console.log(e);
    res.send("Adding Blog Failed");
  }
});

profileRouter.patch("/:id", authentication, async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);
  try {
    const Edited = await ProfileModel.findOneAndUpdate(
      { _id: id, userId: req.body.userId },
      { ...req.body }
    );
    console.log(Edited);
    if (Edited) {
      res.send("Edited Successfully");
    } else {
      res.send("Failed");
    }
  } catch (e) {
    console.log(e);
    res.send("Cannot Edit");
  }
});

profileRouter.delete("/:id", authentication, async (req, res) => {
  const { id } = req.params;
  try {
    const Deleted = await ProfileModel.findOneAndDelete({
      _id: id,
      userId: req.body.userId,
    });
    if (Deleted) {
      res.send("Deleted Successfully");
    } else {
      res.send("Failed");
    }
  } catch (e) {
    console.log(e);
    res.send("Cannot Delete");
  }
});

module.exports = profileRouter;
