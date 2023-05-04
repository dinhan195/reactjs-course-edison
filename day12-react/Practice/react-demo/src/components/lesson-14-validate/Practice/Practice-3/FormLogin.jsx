/** @format */

import { useFormik } from 'formik';
import React from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please input email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Please input password';
  } else if (values.password < 3 || values.password > 25) {
    errors.password = 'Please input password 3 - 25 characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please input confirm password';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Confirm password is not match';
  }
  if (!values.isRead) {
    errors.isRead = 'Required';
  }
  return errors;
};

function FormLogin(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      isRead: false,
    },
    validate,
  });

  const stringJson = JSON.stringify(formik.values);

  return (
    <div>
      <h1>Đăng kí 3</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className="form-field">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <div className="form-field">
          <label htmlFor="confirmPassword">confirmPassword:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className="form-field">
          <label>
            <input
              style={{ display: 'inline' }}
              type="checkbox"
              id="isRead"
              checked={formik.values.isRead}
              onChange={formik.handleChange}
            />
            I read and accept the privacy policy:
            {formik.errors.isRead ? <div>{formik.errors.isRead}</div> : null}
          </label>
        </div>
        <button type="submit">Summit</button>
      </form>
      {formik.values.isRead ? <div>{stringJson}</div> : null}
    </div>
  );
}

export default FormLogin;
