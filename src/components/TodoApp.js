import React, { Component } from 'react';
import Title from "./title/Title"
import TodoForm from "./todo-form/TodoForm"
import TodoList from "./todo-list/TodoList"
import './TodoApp.css';

class App extends Component {

state = {
    data: [{text: "learn react", id: 1}, {text: "get a job", id:2}]
}

// setState()

  render() {
    return (
      <div className="TodoApp">
      {/* this is us creating an instance of the title component. < /> creates an instance and calls render function*/}
        <Title />
        <TodoForm />
        <TodoList todos = {this.state.data} />
      </div>
    );
  }
}

export default App;
