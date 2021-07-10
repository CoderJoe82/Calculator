import React, { Component } from 'react'
import './App.css'
import CalcBody from './components/Body/calculator.body'

class App extends Component {
  render() {
    return (
      <div id = "app">
        <CalcBody />
      </div>
    )
  }
}

export default App