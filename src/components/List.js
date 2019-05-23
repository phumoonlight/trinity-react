import React from 'react';
import './List.css';

class List extends React.Component {
  state = {
    list: [],
    input: ''
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()

    this.setState({
      list: [...this.state.list, this.state.input], 
      input: ''
    })
  }
  
  getList = () => {
    return (this.state.list.map((item, index) => {
      return <li>{item}</li>;
    })
    )
  }

  render = () => {
    return (
      <div className='todo-list'>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            value={this.state.input}
            onChange={this.onChangeHandler}
          />
          <input
            type='submit'
            value='add'
          />
        </form> 
        <ul>
          {this.getList()}
        </ul>
      </div>
      
    )
  }
}

export default List;

