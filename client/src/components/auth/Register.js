import React, { Component } from "react";
import { Link } from "react-router-dom";



// This component provides the user with a styled
// form in order to register an account to the site.
// Initially the information is only logged to the
// terminal until Redux is implemented.

// Note that this.state is a object set to empty
// strings at the beginning, this will be overwritten
// with the user's information or errors that occur

// Link component is using react-router-dom

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(newUser);
  };

  render() {
    const errors = this.state.errors;

    return (
      <div className="container">
        <div style={{ marginTop: ".5rem" }}  className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "12px" }}>
              <h3>
                <b>Register</b>below
              </h3>
              <p className="grey-text text-darken-2">
                Already have an account? Click here to{" "}
                <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">email</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "12px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "5px",
                    letterSpacing: "2px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable black accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
