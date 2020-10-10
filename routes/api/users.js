const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load user model
const User = require("../../models/User");

// beginning of register route

router.post("/register", (req, res) => {
  // First validate input from register user form

  const { error, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already in Database" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before storing in db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hase(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
