import React,{ Component } from "react";

import { Link } from "react-router-dom";

// The Landing component will render 2 buttons to take the user to 
// either a Register component or a Login component.
// The routing to either component is done with the use of react-router-dom
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "70vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h3>
              Template Mern application with authentication using passport and
              JWT
            </h3>
            <p
              style={{ fontFamily: "monospace" }}
              className="flow-text grey-text text-darken-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
              ultrices metus, eu fringilla enim. Cras ac risus vitae diam
              ullamcorper sollicitudin. Integer viverra blandit libero vel
              aliquam. Integer id nisi eu augue lobortis tristique eu in felis.{" "}
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "20vw",
                  borderRadius: "5px",
                  letterSpacing: "2px",
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "20vw",
                  borderRadius: "5px",
                  letterSpacing: "2px",
                }}
                className="btn btn-large waves-effect waves-light hoverable black white-text accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Landing;