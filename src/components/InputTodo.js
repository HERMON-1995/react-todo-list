import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

    handleSubmit = (e) => {
      e.preventDefault();
      // eslint-disable-next-line
      if (this.state.title.trim()) {
      // eslint-disable-next-line
      this.props.addTodoProps(this.state.title);
        this.setState({
          title: '',
        });
      } else {
      // eslint-disable-next-line
      alert('Please write item');
      }
    };

    render() {
      return (
      // eslint-disable-next-line
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          onChange={this.onChange}
          // eslint-disable-next-line
          value={this.state.title}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
        </button>
      </form>
      );
    }
}

export default InputTodo;
