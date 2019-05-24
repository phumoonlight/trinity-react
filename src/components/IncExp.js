import React, { Component } from 'react'
import Form from './IncExpForm';
import Table from './IncExpTable';
import './IncExp.css'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : []
    }
  }

  getState = (formState) => {
    this.setState({
      list: formState
    })
  }

  render() {
    return (
      <div id='inc-exp-list'>
        <div>รายรับรายจ่าย</div>
        <Form getState={this.getState}/>
        <Table data={this.state}/>
      </div>
    )
  }
}
