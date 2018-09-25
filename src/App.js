import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      todos: []
    };

  }

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 10);
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let remTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: remTodos
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={'center'}>Todos</h2>
        <br/>
        <div className={'container'}>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />  
        </div>
        <br/>
        <br/>
        <AddTodo addTodo={this.addTodo} />
      </React.Fragment>
    )
  }

}

export default App;
