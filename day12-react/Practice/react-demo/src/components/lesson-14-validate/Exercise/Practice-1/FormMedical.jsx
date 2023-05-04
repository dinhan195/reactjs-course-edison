/** @format */

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export const FormMedical = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        selectOptions: [],
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Phải ít hơn hoặc bằng 15 kí tự')
          .required('Trường  bắt buộc nhập'),
        address: Yup.string().required('Trường  bắt buộc nhập'),
        phoneNumber: Yup.string()
          .matches(/^[0-9]+$/, 'Số diện thoại phải là số')
          .min(10, 'Nhập ít nhất 10 kí tự')
          .max(20, 'Tối đa 20 kí tự')
          .required('Trường  bắt buộc nhập'),

        email: Yup.string()
          .email('Email không hợp lệ')
          .required('Trường  bắt buộc nhập'),
        selectOptions: Yup.array().min(1, 'Trường bắt buộc nhập'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}>
      <Form>
        <div className="form-field">
          <label htmlFor="name">Tên:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage component="div" className="error" name="name" />
        </div>
        <div className="form-field">
          <label htmlFor="address">Địa chỉ:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage component="div" className="error" name="address" />
        </div>
        <div className="form-field">
          <label htmlFor="phoneNumber">Số điện thoại:</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" />
          <ErrorMessage component="div" className="error" name="phoneNumber" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage component="div" className="error" name="email" />
        </div>
        <div>
          <h4>Dấu hiệu triệu chứng trong vòng 14 ngày:</h4>
          <label style={{ display: 'flex' }}>
            <Field type="checkbox" name="selectOptions" value="1" /> Sốt trên 39{' '}
            <sup>o</sup>C
          </label>
          <label style={{ display: 'flex' }}>
            <Field type="checkbox" name="selectOptions" value="2" /> Ho đau họng
          </label>
          <label style={{ display: 'flex' }}>
            <Field type="checkbox" name="selectOptions" value="3" /> Nhạt mồm
            nhạt miệng
          </label>
          <label style={{ display: 'flex' }}>
            <Field type="checkbox" name="selectOptions" value="4" /> Không có
            triệu chứng
          </label>
        </div>
        <ErrorMessage component="div" className="error" name="selectOptions" />
        <button
          style={{ display: 'block', padding: '10px 20px', marginTop: '10px' }}
          type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
