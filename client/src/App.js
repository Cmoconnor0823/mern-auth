import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
//This Css file is imported but is not currently used
//as the styling is done through materialize
import './App.css';

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
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
  }
}

export default App;
