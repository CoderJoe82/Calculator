import React, { Component } from 'react'
import { connect } from 'react-redux'
import './calculator.display.css'

class CalcDisplay extends Component {
    render() {
        return(
            <div id = "CalcDisplay">
                <span id = "displayNumbers">
                {this.props.equation}
                    </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        equation: state.Equation
    }
}

export default connect(mapStateToProps)(CalcDisplay)