import React, { Component } from 'react'

export default class Table extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     incomeExpenseList: []
  //   }
  // }

  getDataRow = () => {
    const dataFromList = this.props.data
    const mapping = dataFromList.list.map((item, index) => {
      return <tr key={index}>
        <td>{item.detail}</td>
        <td>{item.type === 'income' 
        ? item.amount
        : ''}</td>
        <td>
        {item.type === 'expense' 
        ? item.amount
        : ''}</td>
        <td>{item.balance}</td>
      </tr>
    })
    return mapping
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>รายการ</th>
              <th>รายรับ</th>
              <th>รายจ่าย</th>
              <th>คงเหลือ</th>
            </tr>
          </thead>
          <tbody>
              {this.getDataRow()}
          </tbody>
        </table>
    )
  }
}
