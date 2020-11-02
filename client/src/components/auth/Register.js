import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// To ensure we recieve the expected data we will define
// our property types below
import PropTypes from "prop-types";

// The below imports are used to connect the Register 
// component with redux
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

// classnames is one of the npm packages included
// It is a simple utility for conditionally joining
// classNames together
import classnames from "classnames";

// This component provides the user with a styled
// form in order to register an account to the site.
// Initially the information is only logged to the
// terminal until Redux is implemented.

// Note that this.state is a object set to empty
// strings at the beginning, this will be overwritten
// with the user's information or errors that occur

// Link component is using react-router-dom

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      console.log(props.errors, "static Register")
      return{
        errors: props.errors
      };
    }
    return {
      errors: ""
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

    console.log(newUser, "new user");

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: ".5rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              {/* <i className="material-icons left">keyboard_backspace</i>  */}
            	&larr;  Back to Home
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
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.emailindb,
                  })}
                />
                <label htmlFor="email">email</label>
                <span className="red-text">{errors.emailindb}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
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
// Since we can't define our property types above in
// the constructor, we will define them here

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// This will allow us to call this.props.auth or
// this.props.errors within the Register component
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

// This export uses connect() from react-redux to
// connect our components to our redux store
// provided from the provider component in app

// mapStateToProps allows us to recieve our state from
// Redux and map it to props (how we access state in a component)
// withRouter here is used to redirect within an action
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
