import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SET_NUMBER, SET_ERROR } from '../../../redux/types/types'
import './operators.css'

class Operators extends Component {

    handleButtonClick = (e) => {
        if (this.props.equation.length < 12) {
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

    render() {
        return (
            <div id = "Operators">
                <button value = "*" className = "smallOperators" onClick = {(e) => this.handleButtonClick(e)}>*</button>
                <button value = "/" className = "smallOperators" onClick = {(e) => this.handleButtonClick(e)}>/</button>
                <button value = "-" className = "smallOperators" onClick = {(e) => this.handleButtonClick(e)}>-</button>
                <button value = "+" id = "plusButton" onClick = {(e) => this.handleButtonClick(e)}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        equation: state.Equation,
        answer: state.Answer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operators)