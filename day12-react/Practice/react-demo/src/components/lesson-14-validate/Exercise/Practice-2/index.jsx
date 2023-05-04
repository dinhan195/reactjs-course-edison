/** @format */

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function EmailComposeForm(props) {
  const initialValues = {
    to: '',
    subject: '',
    message: '',
    files: [],
  };
  const validations = Yup.object().shape({
    to: Yup.string().required('Trường bắt buộc nhập!').min(1, 'string'),
    subject: Yup.string().required('Trường bắt buộc nhập!').min(1, 'string'),
    message: Yup.string().required('Trường bắt buộc nhập!').min(1, 'string'),
  });
  const onSubmit = (values) => {
    console.log(values);
    // setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validations}
      onSubmit={(values) => onSubmit(values)}>
      <Form>
        <div className="form-field">
          <label htmlFor="to">Người nhận:</label>
          <Field type="text" id="to" name="to" />
          <ErrorMessage component="div" name="to" className="error" />
        </div>
        <div className="form-field">
          <label htmlFor="to">Chủ thể:</label>
          <Field type="text" id="subject" name="subject" />
          <ErrorMessage component="div" name="subject" className="error" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Nội dung:</label>
          <Field
            type="textarea"
            component="textarea"
            id="message"
            name="message"
          />
          <ErrorMessage component="div" name="message" className="error" />
        </div>
        <div className="form-field">
          <label htmlFor="to">Upload file:</label>
          <Field type="file" id="files" name="files" />
          <ErrorMessage component="div" name="files" className="error" />
        </div>
        <button type="submit">Gửi</button>
      </Form>
    </Formik>
  );
}

export default EmailComposeForm;
