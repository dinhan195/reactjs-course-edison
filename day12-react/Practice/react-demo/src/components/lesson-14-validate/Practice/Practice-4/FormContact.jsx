/** @format */

import React, { useState } from 'react';

export const FormContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };
  console.log(values);
  return (
    <div>
      <h2>form liên hệ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nhập tên:</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Nhập email:</label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contact">Nội dung muốn gưi:</label>
          <textarea
            type="text"
            name="contact"
            id="contact"
            defaultValue={values.contact}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};
