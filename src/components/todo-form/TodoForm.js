import React, { Component } from "react"

export default class TodoForm extends Component {

  // by passing a method in through props, we can change state of a parent from a child
  handleFieldChange = (evt) => {
    this.props.setTodoItemState(evt.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="new to do item" onChange={this.handleFieldChange} />
        <button onClick={() => {
          console.log("button clicked")
          this.props.addTodo()
        }}>
          +
        </button>
      </div>
    )
  }
}