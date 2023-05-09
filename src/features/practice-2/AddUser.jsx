/** @format */

import React, { useState } from 'react';
import UserList from './UserList';
import { useDispatch } from 'react-redux';
import { addUser } from './manageUserSlice';

function AddUser() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value) {
      setInputValue(value);
    }
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addUser(inputValue));
    }
  };
  return (
    <div className="m-5">
      <form onSubmit={handleAddUser}>
        <label>Name:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Add new user"
        />
        <button>Add</button>
      </form>
      <UserList />
    </div>
  );
}

export default AddUser;
