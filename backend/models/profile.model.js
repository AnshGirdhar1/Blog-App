const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Object, required: true },
  userId: { type: Object, required: true },
});

const ProfileModel = mongoose.model("allblog", profileSchema);

module.exports = ProfileModel;
