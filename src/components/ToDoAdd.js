import React, { Component } from "react";
import "../styles/toDoAdd.css";

class ToDoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theThingToDo: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      theThingToDo: this.state.theThingToDo.trim(),
      completed: false,
      key: Math.floor(Math.random() * 50)
    });
    this.setState({
      theThingToDo: ""
    });
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <form id="addtodo" onSubmit={this.handleFormSubmit}>
        <input
          id="addform"
          placeholder="Add a thing here!"
          value={this.state.theThingToDo}
          onChange={this.handleChange}
          name="theThingToDo"
          ref={input => {
            this.nameInput = input;
          }}
        />
        <button id="addbutton" onClick={this.handleFormSubmit}>
          Let's do it
        </button>
      </form>
    );
  }
}

export default ToDoAdd;
