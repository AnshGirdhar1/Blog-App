const express = require("express");
const connection = require("./config/db");
const loginRouter = require("./routes/login.route");
const signupRouter = require("./routes/signup.route");
const app = express();
const cors = require("cors");
const profileRouter = require("./routes/profile.route");
const homeRouter = require("./routes/home.route");
app.use(cors());
app.use(express.json());

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/home",homeRouter);

app.listen(7000, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
