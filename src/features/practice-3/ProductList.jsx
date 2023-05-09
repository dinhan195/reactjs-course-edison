/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';
import './addProductForm.scss';
import { useSelector } from 'react-redux';

function ProductList(props) {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="m-5">
      <h4 className="text-right text-primary" variant="sucsess">
        List sản phẩm
      </h4>
      <div style={{ border: '1px solid black' }}>
        {products.map((product, i) => (
          <Card key={i} className="p-1 m-3">
            {product.name} - {product.price} - {product.color} -{' '}
            {product.describe}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
