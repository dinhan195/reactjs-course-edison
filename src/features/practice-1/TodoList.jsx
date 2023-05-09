/** @format */

import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onFinish, onRemove } from './todoSlice';
const style = {
  todoList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '250px',
    borderBottom: '1px solid black',
    marginBottom: '5px',
  },
  itemsFinish: {
    textDecoration: 'line-through',
    color: 'gray',
  },
};

function TodoList(props) {
  const [filter, setFilter] = useState('');
  const todo = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const handleFinish = (item) => {
    dispatch(onFinish(item));
  };
  const handleRemove = (item) => {
    dispatch(onRemove(item));
  };
  const todoList = useMemo(() => {
    return todo.filter((item) => {
      if (!filter) {
        return true;
      }

      return item.status === filter;
    });
  }, [todo, filter]);
  const handleFilterTodo = (type) => {
    setFilter(type);
  };
  return (
    <div>
      <div>
        <button onClick={() => handleFilterTodo('')}>All</button>
        <button onClick={() => handleFilterTodo('todo')}>Todo</button>
        <button onClick={() => handleFilterTodo('finish')}>Done</button>
      </div>
      <div>
        {todoList &&
          todoList.map((item) => (
            <div key={item.id} style={style.todoList}>
              <span style={item.status === 'finish' ? style.itemsFinish : {}}>
                {item.content}
              </span>
              {item.status === 'todo' ? (
                <button onClick={() => handleFinish(item)}>Finish</button>
              ) : (
                <button onClick={() => handleRemove(item)}>Remove</button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
