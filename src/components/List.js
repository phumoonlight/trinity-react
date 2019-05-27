import React from 'react';
import './List.css';

class List extends React.Component {
  state = {
    list: [],
    input: '',
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { list, input } = this.state;
    this.setState({
      list: [...list, input],
      input: '',
    });
  }

  getList = () => {
    const { list } = this.state;
    return (
      list.map(item => <li key={item.id}>{item}</li>)
    );
  }

  render = () => {
    const { input } = this.state;
    return (
      <div className="todo-list">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value={input}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="add"
          />
        </form>
        <ul>
          {this.getList()}
        </ul>
      </div>
    );
  }
}

export default List;
