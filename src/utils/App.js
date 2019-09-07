import React, { Component } from "react";
import "../styles/App.css";
import ToDoAdd from "../components/ToDoAdd";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      listOfTodos: [],
      isHovering: false
    };
  }

  addToDo = todo => {
    const newList = [todo, ...this.state.listOfTodos];
    this.setState({
      listOfTodos: newList
    });
  };

  itemCompleted = theThing => {
    this.setState({
      listOfTodos: this.state.listOfTodos.map(eachThing => {
        if (eachThing.key === theThing) {
          return {
            ...eachThing,
            completed: !eachThing.completed
          };
        } else {
          return eachThing;
        }
      })
    });
  };

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  deleteThing = theThing => {
    this.setState({
      listOfTodos: this.state.listOfTodos.filter(todo => todo !== theThing)
    });
  };

  render() {
    return (
      <div id="main-list">
        <h1 id="title">Genius to-do list</h1>
        <ToDoAdd onSubmit={this.addToDo} />
        {this.state.listOfTodos.length !== 0 && (
          <div id="thelist">
            {this.state.listOfTodos.map((eachThing, i) => {
              console.log(eachThing);

              return (
                <div
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}
                  id="eachThingContainer"
                >
                  <div
                    style={{
                      textDecoration: eachThing.completed ? "line-through" : "",
                      color: eachThing.completed ? "green" : ""
                    }}
                    className="eachThing"
                    //  onClick={() => this.itemCompleted(eachThing.key)}
                    key={eachThing.key}
                  >
                    {eachThing.theThingToDo}
                  </div>
                  <div>
                    <label className="completed" htmlFor="completed">
                      completed
                    </label>

                    <input
                      type="checkbox"
                      name="completed"
                      className="completed"
                      onClick={() => this.itemCompleted(eachThing.key)}
                    />

                    {/* {this.state.isHovering &&  */}
                    <button
                      className="deleteButton"
                      onClick={() => this.deleteThing(eachThing)}
                    >
                      X
                    </button>
                    {/* } */}
                  </div>
                </div>
              );
            })}
            {this.state.listOfTodos.length === 1 && (
              <strong>
                {this.state.listOfTodos.filter(todo => !todo.completed).length}{" "}
                item
              </strong>
            )}
            {(this.state.listOfTodos.length === 0 ||
              this.state.listOfTodos.length > 1) && (
              <strong>
                {this.state.listOfTodos.filter(todo => !todo.completed).length}{" "}
                items
              </strong>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
