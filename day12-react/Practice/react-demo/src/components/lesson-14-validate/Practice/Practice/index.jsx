/** @format */

import React, { useState } from 'react';

function FormInput() {
  const [form, setForm] = useState({
    name: 'form',
    email: 'abc@gmail.com',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
      email: e.target.value,
    });
  };
  const handleSubmit = (e) => {};
  const handleReset = (e) => {
    setForm({
      name: '',
      email: '',
    });
  };
  console.log(form);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input type="text" name="name" onChange={handleChange} />
        <p>Email</p>
        <input type="text" name="email" onChange={handleChange} />
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default FormInput;
