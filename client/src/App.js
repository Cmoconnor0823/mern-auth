import React, { Component } from "react";
import './App.css';
import Nav from "./components/layout/Navbar"
import Landing from "./components/layout/Landing";

class App extends Component {
  render(){
  return (
    <div className="App">
        <Nav />
        <Landing />
      <h1>Hello</h1>
    </div>
  );
  }
}

export default App;
