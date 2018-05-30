import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container } from "react-grid-system";
import Routes from "./config/routes";
import "./App.css";

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <Container>
        <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default App;
