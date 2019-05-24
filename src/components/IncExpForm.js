import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      balance: 0,
      input: {
        detail: '',
        amount: 0
      }
    }
  }

  onChangeHandler = (e) => {
    const clonedState = this.state
    clonedState.input[e.target.name] = e.target.value
    this.setState(clonedState)
  }

  onSubmitHandler = async (e) => {
    let balance = this.state.balance
    const amount = this.state.input.amount
    const detail = this.state.input.detail
    const button = e.target.value
   
    balance = button === 'income' 
    ? balance + (+amount) 
    : balance - (+amount)

    const newState = {
      list: [...this.state.list, {
        detail: detail !== '' 
        ? detail 
        : `รายการ${this.state.list.length + 1}`,
        amount: amount,
        balance: balance,
        type: button
      }],
      balance: balance,
      input: {
        detail: '',
        amount: this.state.input.amount
      }
    }

    await this.setState(newState)
    this.props.getState(this.state.list)
  }

  render() {
    return (
      <div>
        <input
          name='detail'
          type='text'
          value={this.state.input.detail}
          onChange={this.onChangeHandler}
        />
        <input
          name='amount'
          type='number'
          value={this.state.input.amount}
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onSubmitHandler} value='income'>รายรับ</button>
        <button onClick={this.onSubmitHandler} value='expense'>รายจ่าย</button>
      </div>
    )
  }
}
