/** @format */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Register(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isRead: false,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const sendData = (data) => {
    console.log(data);
    setValues(data);
  };

  const stringJson = JSON.stringify(values);
  return (
    <div>
      <h1>Đăng kí</h1>
      <form onSubmit={handleSubmit(sendData)}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors?.email && <div>{errors?.email.message}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="password">Nhập password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Required',
              min: {
                value: 3,
                message: 'Min length is 3',
              },
              max: {
                value: 20,
                message: 'Max length is 20',
              },
            })}
          />
          {errors?.password && <div>{errors?.password?.message}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Nhập lại password</label>
          <input
            type="passwoed"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Required',
              min: { value: 3, message: 'Min length is 3' },
              max: { value: 20, message: 'Max length is 20' },
              validate: (val) => {
                if (watch('password') !== val) {
                  return 'Your password do not match';
                }
              },
            })}
          />
          {errors?.confirmPassword && (
            <div>{errors?.confirmPassword?.message}</div>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="isRead" style={{ display: 'flex' }}>
            <input
              type="checkbox"
              id="isRead"
              {...register('isRead', {
                required: 'Required',
              })}
            />
            I read and accept the privacy policy
          </label>
          {errors?.isRead && <div>{errors?.isRead?.message}</div>}
        </div>
        <button>Submit</button>
      </form>
      <div>{stringJson}</div>
    </div>
  );
}

export default Register;
