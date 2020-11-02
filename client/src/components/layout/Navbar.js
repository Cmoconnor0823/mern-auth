import React, { Component } from "react";
import { Link } from "react-router-dom";

// A basic nav bar using react-router-dom to handle
// rendering different components when the user clicks
// the Link component. Styling is done with MaterializeCSS
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
            <Link
              to="/"
              style={{
                fontFamily: "sans-serif",
              }}
              className="col s5 brand-logo center white-text"
            >
              {/* <i className="material-icons">code</i> */}
              &lt; MERN &gt;
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
