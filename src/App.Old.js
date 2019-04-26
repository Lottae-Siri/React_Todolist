import React, { Component } from 'react';
import './App.css';

import Todo from './components/TodoList'
// import TodoForm from './components/TodoForm'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Todo/>
        </header>
      </div>
    );
  }
}

export default App;