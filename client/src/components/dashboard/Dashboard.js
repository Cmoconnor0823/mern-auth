import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = (event) => {
    event.preventDefault();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "80vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h3>
              <b>Hello </b> {user.name.split(" ")[0]}
              <p>
                You are logged into a full-stack{""}
                <span style={{ fontFamily: "sans-serif" }}>MERN</span>app
              </p>
            </h3>
            <button
              style={{
                width: "150px",
                borderRadius: "5px",
                letterSpacing: "2px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable black accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser})(Dashboard);