import React, { Component } from 'react'
import Calculator from './Calculator'
import IncomeAndExpensesList from './IncExp'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Basic React</header>
        <div className='app-body'>
          <Calculator/>
          <IncomeAndExpensesList/>
        </div>
      </div>
    )
  }
}
