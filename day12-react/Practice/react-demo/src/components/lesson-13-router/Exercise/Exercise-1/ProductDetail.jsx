/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const param = useParams();
  const productId = param.productId;
  return <div>Product: ID ={productId}</div>;
}

export default ProductDetail;
