import React, { Component } from 'react'

export default class CalculatorOutput extends Component {
  render() {
    return (
      <div>
        {this.props.summary}
      </div>
    )
  }
}
