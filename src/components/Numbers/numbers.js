import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_NUMBER, SET_ERROR, SET_CLEAR, SET_SOLVE } from "../../redux/types/types";
import "./numbers.css";

class Numbers extends Component {


  handleButtonClick = (e) => {
    if (this.props.equation.length < 30) {
      this.props.dispatch({
        type: SET_NUMBER,
        payload: e.target.value
      })
    } else {
      this.props.dispatch({
        type: SET_ERROR,
        payload: "ERROR: Push CLR"
      })
      
    }
  }

  handleClickClear = () => {
    this.props.dispatch({
      type: SET_CLEAR,
      payload: [""]
    })
  }

  handleSolve = () => {
    const solve = new Function(`return ${this.props.equation.join("")}`)
    const answer = `${solve()}`
    if (answer.split("").length > 30) {
      this.props.dispatch({
        type: SET_ERROR,
        payload: "ERROR: Push CLR"
      })
      return
    }
    this.props.dispatch({
      type: SET_SOLVE,
      payload: [answer]
    })
  }

  render() {
    return (
      <div id="Numbers">
        <div id="row1">
          <button value = "(" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>(</button>
          <button value = ")" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>)</button>
          <button className = "theNumberButtons" onClick = {this.handleClickClear}>CLR</button>
        </div>
        <div id="row2">
          <button value = "1" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>1</button>
          <button value = "2" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>2</button>
          <button value = "3" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>3</button>
        </div>
        <div id="row3">
          <button value = "4" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>4</button>
          <button value = "5" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>5</button>
          <button value = "6" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>6</button>
        </div>
        <div id="row4">
          <button value = "7" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>7</button>
          <button value = "8" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>8</button>
          <button value = "9" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>9</button>
        </div>
        <div id="row5">
          <button value = "." className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>.</button>
          <button value = "0" className = "theNumberButtons" onClick = {(e) => this.handleButtonClick(e)}>0</button>
          <button value = "=" className = "theNumberButtons" onClick = {this.handleSolve}>=</button>
        </div>
      </div>
    );
  }
}

window.addEventListener("error", function() {
  alert(`Error occured: Inccorect Input`)
  window.location.reload()
})

const mapStateToProps = (state) => {
  return {
    equation: state.Equation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);