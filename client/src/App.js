import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//This Css file is imported but is not currently used
//as the styling is done through materialize
import './App.css';

// the following 2 imports are required to use redux
import { Provider } from "react-redux";
import store from "./store";

// The following components are built in order
import Nav from "./components/layout/Navbar"
import Landing from "./components/layout/Landing";
// Note that the page will error out until our routes
// are complete 
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
    </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
