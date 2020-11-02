import React from "react";
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


// Since we can't define our property types above in
// the constructor, we will define them here

PrivateRoute.propTypes = ({
    auth: PropTypes.object.isRequired
})

const mapStateToProps = state => ({
    auth: state.auth
});


// This export uses connect() from react-redux to
// connect our components to our redux store
// provided from the provider component in app

// mapStateToProps allows us to recieve our state from
// Redux and map it to props (how we access state in a component)
// withRouter here is used to redirect within an action

export default connect(mapStateToProps)(PrivateRoute);