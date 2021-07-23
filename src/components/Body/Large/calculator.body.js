import React, { Component } from "react";
import CalcDisplay from '../../Display/Large/calculator.display'
import Operators from "../../Operators/Large/operators"
import Numbers from "../../Numbers/Large/numbers"
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
