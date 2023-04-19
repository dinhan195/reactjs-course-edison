/** @format */

import React from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';

function SearchParam() {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get('key');
  const type = searchParams.get('type');
  console.log(key, type);
  setSearchParams(
    createSearchParams({
      frunt: 'hello',
      xinchao: 'hi',
    })
  );
  return <div>use detail</div>;
}

export default SearchParam;
