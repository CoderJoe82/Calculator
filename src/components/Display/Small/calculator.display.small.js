import React, { Component } from 'react'
import { connect } from 'react-redux'
import './calculator.display.small.css'

class CalcDisplaySmall extends Component {
    render() {
        return(
            <div id = "CalcDisplaySmall">
                <span id = "displayNumbersSmall">
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

export default connect(mapStateToProps)(CalcDisplaySmall)