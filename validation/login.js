// Simmilar to the register validator
// This page is used for the log in
const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if(data.email.errors == "Email already in Database"){
      console.log(data.email, "email error")
    }

     // Check for email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };

}