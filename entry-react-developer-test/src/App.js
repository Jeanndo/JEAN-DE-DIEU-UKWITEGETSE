import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global.js";
import MyRoutes from "./routes/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <MyRoutes />
      </Router>
    );
  }
}

export default App;
