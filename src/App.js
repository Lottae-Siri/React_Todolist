import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" >
      <div className="row">
        <div className="col-4 border todo-content">
          {todo.id}: {todo.title}
        </div>
        <div className="col-4">
          {/* <button className="btn-primary" onClick={() => completeTodo(index)}>Complete</button> */}
          <button  className="btn-warning" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task1",
      isCompleted: false
    },
    {
      id: 2,
      title: "Task2",
      isCompleted: false
    },
    {
      id: 3,
      title: "Task3",
      isCompleted: false
    }
  ]);

  const addTodo = title => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1> Todo List </h1>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;