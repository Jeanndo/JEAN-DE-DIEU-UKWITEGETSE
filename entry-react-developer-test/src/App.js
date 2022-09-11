import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global.js";
import MyRoutes from "./routes/index.js";
import Navigation from "./components/Navbar/Navbar.js";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      showSwitcher: false,
    };
  }

  toggleSwitcher = () => {
    this.setState((prevState) => ({ showSwitcher: !prevState.showSwitcher }));
  };

  closeSwitcher = () => {
    this.setState({ showSwitcher: false });
  };

  render() {
    return (
      <Router>
        <Navigation
          switcher={this.state.showSwitcher}
          toggleSwitcher={this.toggleSwitcher}
          closeSwitcher={this.closeSwitcher}
        />
        <GlobalStyles />
        <MyRoutes closeSwitcher={this.closeSwitcher} />
      </Router>
    );
  }
}

export default App;
