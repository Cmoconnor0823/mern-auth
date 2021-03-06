const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load user model
const User = require("../../model/User");

///////////////// beginning of register route ///////////////

router.post("/register", (req, res) => {
  // First validate input from register user form
  console.log("testing proxy");
  
  const { errors, isValid } = validateRegisterInput(req.body);
  
  console.log(req.body.email, "errors in user.js")
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } 
 console.log(req.body.email)
  User.findOne({ email: req.body.email }).then((user) => {
    console.log(user,"user.js in db")
    if (user) {
      return res.status(400).json({ emailindb: "Email already in Database" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      
      // Hash password before storing in db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
        });
      });
    }
  });
});

////////////////// End of register //////////////////

///////////// Beginnning of login ///////////////////

// Post route to log in user and return a JWT

router.post("/login", (req, res) => {
  // first validate form info

  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email on login

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ emailnotfound: " 404 email not found" });
    }

    // begin password check

    bcrypt.compare(password, user.password).then((isMatch) => {
      // if user is matched create the JWT
      if (isMatch) {
        const dataload = {
          id: user.id,
          name: user.name,
        };

        // Sign JWT token
        jwt.sign(
          dataload,
          keys.secretOrKey,
          // expires in one week in seconds
          { expiresIn: 604800 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ incorpassword: " Password does not match record" });
      }
    });
  });
});

// Don't forget to export
module.exports = router;
