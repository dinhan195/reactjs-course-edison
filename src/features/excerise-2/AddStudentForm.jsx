/** @format */

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addStudent } from './studentSlice';

function AddStudentForm(props) {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(addStudent(values));
  };
  return (
    <Formik
      onSubmit={(values) => onSubmit(values)}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
      })}
      initialValues={{
        name: '',
        gender: '',
      }}>
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form
          className="p-3 d-grid gap-2"
          style={{ border: '1px solid gray', borderRadius: '10px' }}
          onSubmit={handleSubmit}>
          <h2 className="text-center">ADD STUDENTS</h2>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Input student name..."
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              // as="select"
              name="gender"
              type="text"
              placeholder="Input gender..."
              value={values.gender}
              onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="orther">Orther</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            ADD STUDENT
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddStudentForm;
