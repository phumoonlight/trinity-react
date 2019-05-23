import React from 'react';

class ListInput extends React.Component {
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

  render = () => {
    return (
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
    )
  }
}

export default ListInput;

