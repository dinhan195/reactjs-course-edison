/** @format */

import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import * as fomik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from './contactSlice';

function AddContactForm(props) {
  const { Formik } = fomik;
  const dispatch = useDispatch();

  const onSubmit = (values, { setReset }) => {
    dispatch(
      addContact({
        ...values,
        status: '',
      })
    );
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setReset }) => onSubmit(values, { setReset })}
      initialValues={{
        name: '',
        phone: '',
      }}>
      {({ handleSubmit, handleChange, values, errors }) => (
        <Card className="p-3 me-3">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mt-3"
              name="name"
              type="text"
              placeholder="Name..."
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
            <Form.Control
              className="mt-3"
              name="phone"
              type="text"
              placeholder="Phone number..."
              value={values.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Button className="mt-3 w-100" variant="primary" type="submit">
              Add Contact
            </Button>
          </Form>
        </Card>
      )}
    </Formik>
  );
}

export default AddContactForm;
