/** @format */

import React, { useState } from 'react';

function FormSignup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isRead: false,
  });
  const [errors, setError] = useState([]);
  const handleChange = (e) => {
    e.persist();
    if (e.target.value === 'isRead') {
      setValues({
        ...values,
        [e.target.name]: !values.isRead,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  function validate() {
    const { email, password, isRead, confirmPassword } = values;
    const errors = [];

    if (email.length < 5) {
      errors.push('Email should be at least 5 characters long');
    }
    if (email.split('').filter((x) => x === '@').length !== 1) {
      errors.push('Email should contain a @');
    }
    if (email.indexOf('.') === -1) {
      errors.push('Email should contain at least one dot');
    }
    if (password.length < 6) {
      errors.push('Password should be at least 6 characters long');
    }
    if (password !== confirmPassword) {
      errors.push('Password should be at least 6 characters long');
    }
    if (!isRead) {
      errors.push('You must be accepted privacy policy');
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setError(errors);
    }
  };

  const stringJson = JSON.stringify(values);
  return (
    <div className="container">
      <h1>Rigister</h1>
      {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Nhập Email</label>

          <input
            name="email"
            type="email"
            defaultValue={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Nhập password:</label>
          <input
            name="password"
            type="password"
            defaultValue={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Nhập laji password:</label>
          <input
            name="confirmPassword"
            type="password"
            defaultValue={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>
            <input
              name="isRead"
              type="checkbox"
              checked={values.isRead}
              onChange={handleChange}
            />
            I read and accept the privacy policy
          </label>
        </div>
        <button>SUBMIT</button>
      </form>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}

export default FormSignup;
