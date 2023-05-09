/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from './manageUserSlice';

function AddNewArticle(props) {
  const [inputArticle, setInputArticle] = useState('');
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value) {
      setInputArticle(value);
    }
  };
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    
    if (inputArticle) {
      dispatch(
        addArticle({
          userId: userId,
          article: inputArticle,
        })
      );
    }
  };
  return (
    <div>
      <p>Article</p>
      <form onSubmit={(e) => handleSubmit(e, props.userId)}>
        <input
          type="text"
          value={inputArticle}
          onChange={handleOnChange}
          placeholder="Add new article"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddNewArticle;
