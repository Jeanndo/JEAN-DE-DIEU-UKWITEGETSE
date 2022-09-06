import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global.js";
import MyRoutes from "./routes/index.js";
import Navigation from "./components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <GlobalStyles />
        <MyRoutes />
      </Router>
    );
  }
}

export default App;
