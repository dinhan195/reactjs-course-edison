/** @format */

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import './addProductForm.scss';
import ProductList from './ProductList';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';

function AddProductForm(props) {
  const { Formik } = formik;
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    price: '',
    color: '',
    describe: '',
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.string().required(),
    color: yup.string().required(),
    describe: yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addProduct(values));
    // resetForm();
  };
  return (
    <Row className="m-3">
      <Col md={4}>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => onSubmit(values, { resetForm })}>
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form className="m-5" onSubmit={handleSubmit}>
              <h4 className="text-center text-primary">Thêm sản phẩm</h4>
              <Form.Group className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  className={`border-primary ${
                    errors.name ? 'border-danger' : ''
                  }`}
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!touched.color && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá</Form.Label>
                <Form.Control
                  className={`border-primary ${
                    errors.price ? 'border-danger' : ''
                  }`}
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Màu</Form.Label>
                <Form.Select
                  className={`border-primary ${
                    touched.color && errors.color ? 'border-danger' : ''
                  }`}
                  as="select"
                  name="color"
                  onChange={handleChange}
                  value={values.color}
                  isInvalid={!!(touched.color && errors.color)}>
                  <option>Chọn màu</option>
                  <option value="blue">Xanh</option>
                  <option value="white">Trắng</option>
                  <option value="black">Đen</option>
                  <option value="red">Đỏ</option>
                </Form.Select>
                {touched.color && errors.color && (
                  <Form.Control.Feedback type="invalid">
                    {errors.color}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                  className={`border-primary ${
                    errors.describe ? 'border-danger' : ''
                  }`}
                  as="textarea"
                  style={{ height: 'auto', minHeight: '10px' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="describe"
                  value={values.describe}
                  onChange={handleChange}
                  isInvalid={!!errors.describe}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.describe}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="bg-info border-primary fs-3 p-1"
                  size="lg">
                  Thêm
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
      <Col md={8}>
        <ProductList />
      </Col>
    </Row>
  );
}

export default AddProductForm;
