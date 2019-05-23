import React, { Component } from 'react'
import './App.css';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Basic React</header>
        <div className='app-body'>
          <Calculator/>
        </div>
      </div>
    )
  }
}
