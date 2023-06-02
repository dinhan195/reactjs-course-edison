/** @format */

import React, { useEffect, useState } from 'react';

export const handleFetchAPI = (callback) => {
  return new Promise((resolve) => {
    callback(resolve);
  });
};
const AsyncTesting = () => {
  const [data, setData] = useState('Async Testing');
  const [loading, setLoading] = useState(false);

  const handleFetchAPIDidMount = () => {
    setLoading(true);
    return handleFetchAPI((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  useEffect(() => {
    handleFetchAPIDidMount()
      .then((data) => {
        setData(data || 'Hello World');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}>
      <div data-testid="async-data">{data}</div>
      <div>{loading && <div>Loading</div>}</div>
    </div>
  );
};

export default AsyncTesting;
