const isEmpty = require("is-empty");
// User Validation built with npm is-empty

// Look into replacing is- empty with a type of check???
const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //First check to see if there are any empty fields
  //If data is empty for the provided value, convert the
  //data to an empty string for use with validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check for data.name

  if (Validator.isEmpty(data.name)) {
    errors.name = "Please enter a Name";
  }

  // Check for email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Checks for Passwords

  // Create an additional check for a more complex password //
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm your password";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "The passwords endtered do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
