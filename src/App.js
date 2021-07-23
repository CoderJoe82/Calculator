import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import "./App.css";
import CalcBody from "./components/Body/Large/calculator.body";
import CalcBodySmall from "./components/Body/Small/calculator.body.small"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Breakpoint large up>
          <div id="app">
            <CalcBody />
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <CalcBodySmall />
        </Breakpoint>
      </React.Fragment>
    );
  }
}

export default App;
