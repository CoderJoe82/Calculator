import React, { Component } from "react";
import CalcDisplay from "../Display/calculator.display";
import Numbers from "../Numbers/numbers";
import Operators from "../Operators/operators";
import "./calculator.body.css";

class CalcBody extends Component {
  render() {
    return (
      <div id="CalcBody">
        <CalcDisplay />
        <div id = "numAndOperators">
          <Numbers />
          <Operators />
        </div>
      </div>
    );
  }
}

export default CalcBody;
