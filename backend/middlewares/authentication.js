const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  if (req.headers.token) {
    const token = req.headers.token.split(" ")[1];
    console.log(token);
    try {
      let decoded = await jwt.verify(token, "secret");
      req.body.userId = decoded.userId;
      next();
    } catch (e) {
      console.log(e);
      res.send("Authentication Failed");
    }
  } else {
    res.send("Authentication Failed");
  }
};

module.exports = authentication;
