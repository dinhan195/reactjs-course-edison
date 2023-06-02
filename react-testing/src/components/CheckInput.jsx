/** @format */

import React, { useState } from 'react';

const CheckInput = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };
  const handleOnKeyPress = (e) => {
    if (e.charCode !== 0) {
      let newMessage = '';
      if (content.length > 0 && content.length <= 15) {
        newMessage = 'Nội dung hợp lệ.';
      } else if (content.length > 15) {
        newMessage =
          'Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự';
      }
      setMessage(newMessage);
    }
  };
  return (
    <div>
      <h3>Nội dung</h3>
      <input
        value={content}
        onChange={handleInputChange}
        onKeyPress={handleOnKeyPress}
        name="name"
        placeholder="Nhập nội dung"
        data-testid="input_name"
      />
      {message && (
        <div className="error_message">
          <h3 data-testid="error_message">{message}</h3>
        </div>
      )}
    </div>
  );
};

export default CheckInput;
