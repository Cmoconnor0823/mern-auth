import React, { Component } from "react";
import { Link } from "react-router-dom";

// To ensure we recieve the expected data we will define
// our property types below
import PropTypes from "prop-types";

// The below imports are used to connect the Register 
// component with redux
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

// classnames is one of the npm packages included
// It is a simple utility for conditionally joining
// classNames together
import classnames from "classnames";

// This component provides the user with a styled
// form in order to log into the site. Initially 
// the information is only logged to the terminal
// until Redux is implemented.

// Note that this.state is a object set to empty
// strings at the beginning, this will be overwritten
// with the user's information or errors that occur

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // send user to a priviate route page called dashboard when they login
      this.props.history.push("/dashboard");
    }
  }
// In a future update this will be updated to use
// the recommended method static getDerivedStateFromProps
// the code commented out below is an example but
// it does not currently work as intended
    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   if(props.auth.isAuthenticated){
  //     this.props.history.push("/dashboard");
  //   }
  //   if (props.errors !== state.errors) {
  //     return{
  //       errors: props.errors
  //     }
  //   }
  //   return props
  // }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(userData, "userData Login.js");

    // since we handle the redirect above in the component we don't need
    // this.props.history like we did for Register.js
    this.props.loginUser(userData);
  };

  render() {
    const {errors} = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              {/* <i className="material-icons left">keyboard_backspace</i>  */}
            	&larr;  Back to Home
            </Link>
            <div className="col s12 " style={{ paddingLeft: "12px" }}>
              <h3>
                <b>Login</b> below
              </h3>
              <p className="grey-text text-darken-2">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className= {classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("",{
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
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
                  Login
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


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// This will allow us to call this.props.auth or
// this.props.errors within the Login component
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


export default connect(
  mapStateToProps,
  { loginUser }
 ) (Login);