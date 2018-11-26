import React, {Component} from "react"

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="new to do item"/>
        <button onClick={ () => {
          console.log("button clicked")
        }}>
        +
        </button>
      </div>
    )
  }
}