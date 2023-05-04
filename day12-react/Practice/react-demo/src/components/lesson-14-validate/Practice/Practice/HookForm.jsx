/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';

function HookForm(props) {
  const { handleSubmit, register } = useForm();
  const sendData = (data) => {
    console.log(111, data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <div>
          <label>name</label>
          <input type="text" id="name" {...register('name')} />
        </div>
        <div>
          <label>email</label>
          <input type="text" id="email" {...register('email')} />
        </div>
      </form>
    </div>
  );
}

export default HookForm;
