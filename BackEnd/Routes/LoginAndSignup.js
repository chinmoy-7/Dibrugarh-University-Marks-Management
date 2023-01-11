const router = require("express").Router();
const register = require("../Models/Registeration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Signup Route
router.post("/api/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await register.find({ email: email });
    if (user.length > 0) {
      return res.json({
        status: "failed",
        message: "User already exists",
      });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.json({
          status: "failed",
          message: err.message,
        });
      }
      const newUser = await register.create({
        username: username,
        email: email,
        password: hash,
      });
    });
    res.json({
      status: "success",
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

//Login Route
router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await register.find({ email: email });
    if (user.length == 0) {
      return res.json({
        status: "failed",
        message: "Enter correct credentials",
      });
    }
    bcrypt.compare(password, user[0].password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: user[0]._id }, process.env.JWT_SECRET);
        return res.json({
          status: "success",
          token,
        });
      }

      res.json({
        status: "failed",
        message: "Enter correct credentials",
      });
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});
module.exports = router;
