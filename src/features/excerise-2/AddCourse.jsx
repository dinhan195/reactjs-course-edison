/** @format */

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCourse, onRemoveCourse } from './studentSlice';

function AddCourse(props) {
  const { Formik } = formik;
  const dispatch = useDispatch();

  const onSubmit = (values, id) => {
    dispatch(addCourse({ id, course: values.course }));
  };
  const handleDelete = (courseId, studentId) => {
    dispatch(onRemoveCourse({ courseId, studentId }));
  };
  return (
    <div>
      <Formik
        onSubmit={(values) => onSubmit(values, props.studentId)}
        validationSchema={yup.object().shape({
          course: yup.string().required(),
        })}
        initialValues={{
          course: '',
        }}>
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              name="course"
              type="text"
              className="me-2 w-50"
              value={values.course}
              onChange={handleChange}
              isInvalid={!!errors.course}
            />

            <Button className="float-right" type="submit">
              Add
            </Button>
          </Form>
        )}
      </Formik>
      <ul>
        {props.courses.map((course) => {
          return (
            <li className="mt-2 border-bottom">
              <div className="d-flex justify-content-between">
                {course.course}
                <Button
                  className="ms-5"
                  variant="outline-secondary"
                  onClick={() => handleDelete(course.id, props.studentId)}>
                  Remove
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AddCourse;
