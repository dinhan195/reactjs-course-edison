/** @format */

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };
  console.log(username, password);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setMessage('Vui lòng nhập username');
    } else if (!password) {
      setMessage('Vui lòng nhập mật khẩu');
    } else if (username !== 'admin' || password !== '123456') {
      setMessage('Tên đăng nhập hoặc mật khẩu không chính xác');
    } else {
      setMessage(`Chào mừng ${username}`);
    }
  };
  console.log(111, message);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          name="username"
          id="username"
          data-testid="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          name="password"
          id='password'
          data-testid="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" data-testid="btn_submit">
        Đăng nhập
      </button>
      {message && (
        <div className="error_message">
          <h3 data-testid="error_message">{message}</h3>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
