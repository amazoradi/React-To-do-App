import React, { Component } from "react"

export default class TodoItem extends Component {
  render() {
    return (
      <li onClick={() => {
        console.log("click item")
        this.props.deleteTodo(this.props.thing.id)
      }}>{this.props.thing.text}
      </li>
    )
  }
}
