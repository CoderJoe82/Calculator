import React, { Component } from "react";
import CalcDisplaySmall from '../../Display/Small/calculator.display.small'
import NumbersSmall from '../../Numbers/Small/numbers.small'
import OperatorsSmall from '../../Operators/Small/operators.small'
import "./calculator.body.small.css";

class CalcBodySmall extends Component {
  render() {
    return (
      <div id="CalcBodySmall">
        <CalcDisplaySmall />
        <div id = "numAndOperatorsSmall">
          <NumbersSmall />
          <OperatorsSmall />
        </div>
      </div>
    );
  }
}

export default CalcBodySmall;
