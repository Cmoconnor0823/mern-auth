import React, { Component } from "react";
import {Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// This is a private route that will display the 
// dashboard component if user passed authentication
// or it will return them to the login route if not

const PrivateRoute = ({ component: Component, auth, ...rest
}) => (
    <Route 
    {...rest}
    render={props =>
    auth.isAuthenticated === true ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login" />
    )
}
/>
);

PrivateRoute.propTypes = ({
    auth: PropTypes.object.isRequired
})

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);