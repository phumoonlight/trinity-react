import React, { Component } from 'react'
import CalculatorOutput from './CalculatorOutput';

export default class Calculator extends Component {
  state = {
    summary: 0,
    input: ''
  }

  doPlus = () => {
    this.setState({
      summary: this.state.summary + (+this.state.input)
    })
  }

  doMinus = () => {
    this.setState({
      summary: this.state.summary - (+this.state.input)
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div id='calculator'>
        <input
          type='number'
          onChange={this.onChangeHandler}
        />
        <button onClick={this.doPlus}>+</button>
        <button onClick={this.doMinus}>-</button>
        <CalculatorOutput summary={this.state.summary}/>
      </div>
    )
  }
}