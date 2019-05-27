import React from 'react';

class ListInput extends React.Component {
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

  render = () => {
    const { input } = this.state;
    return (
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
    );
  }
}

export default ListInput;
