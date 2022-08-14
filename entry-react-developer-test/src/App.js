import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import MyRoutes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Navbar />
        <MyRoutes />
      </Router>
    );
  }
}

export default App;
