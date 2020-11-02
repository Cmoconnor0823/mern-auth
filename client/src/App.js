import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//This Css file is imported but is not currently used
//as the styling is done through materialize
import './App.css';

// To allow our app to work with the auth we created
// the following 3 imports are needed
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


// The following 2 imports are required to use redux
import { Provider } from "react-redux";
import store from "./store";

// The following components are built in order
import Nav from "./components/layout/Navbar"
import Landing from "./components/layout/Landing";
// Note that the page will error out until our routes
// are complete 
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// To use our private route include the following 2 imports
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// import { set } from "mongoose";

// First we need to check for the token to see if the
// user is still logged in from a prior session

if(localStorage.jwtToken) {
  // If there is a jwtToken set it to the auth header
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Then decode the token and get the user info
  const decoded = jwt_decode(token);
  // Finally dispatch to set the user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Now we will check to see if the token 
  // provided is expired
  const currentTime = Date.now() / 1000 // time in milliseconds

  if(decoded.exp < currentTime) {
    // if the token is expired log the user out
    store.dispatch(logoutUser());
    // and then redirect the user to the login 
    window.location.href = "./login"
  }
}


class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard"
          component={Dashboard} />
        </Switch>
    </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
