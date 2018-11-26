import React, { Component } from 'react';
import Title from "./title/Title"
import TodoForm from "./todo-form/TodoForm"
import TodoList from "./todo-list/TodoList"
import './TodoApp.css';

class App extends Component {

  state = {
    data: [],
    todoItem: ""
  }


  //setState is async. there is an optional second arguement (a callback funct) that can be used to insure that the setState has finisihed (we know the setState is done when the callback function is run)
  setTodoItemState = (val) => {
    this.setState({ todoItem: val })
  }

  // api calls should be in own module but for this quick example it is here
  getTodos() {
    fetch("http://localhost:5002/todos")
      .then(data => data.json())
      .then(todos => this.setState({ data: todos }))
  }

  // this way of writing the method preserves the scope of this. When addTodo is called in todoForm, this still refers to todoApp
  addTodo = () => {
    const newTodo = { text: this.state.todoItem }
    fetch("http://localhost:5002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newTodo)
    })
      .then(() => this.getTodos())
  }

  deleteTodo = (id) => {
    fetch(`http://localhost:5002/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => this.getTodos())
  }

  // once our page loads, the database will be called and get our todos
  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
      <div className="TodoApp">
        {/* this is us creating an instance of the title component. < /> creates an instance and calls render function*/}
        <Title />
        <TodoForm addTodo={this.addTodo} setTodoItemState={this.setTodoItemState} />
        <TodoList todos={this.state.data} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
