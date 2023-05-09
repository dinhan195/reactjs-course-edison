/** @format */

import React, { useState } from 'react';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function TodoApp(props) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    if (value) {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addTodo(inputValue));
    }
    setInputValue('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <p>Todo List:</p>
        <TodoList />
      </div>
    </div>
  );
}

export default TodoApp;
