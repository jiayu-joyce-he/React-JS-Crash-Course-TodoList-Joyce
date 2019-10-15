import React, { Component } from 'react';
import propTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    title: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit = {this.onSubmit} style = {{ display: "flex"}}>
        <input
          type = "text"
          name = "title"
          placeholder = "Add to dos ..."
          style = {{ flex: "10", padding: "5px"}}
          onChange = {this.onChange}
          value = {this.state.title}
          />
        <input
          type = "submit"
          value = "submit"
          className = "btn"
          style = {{flex: "1"}}
          />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
