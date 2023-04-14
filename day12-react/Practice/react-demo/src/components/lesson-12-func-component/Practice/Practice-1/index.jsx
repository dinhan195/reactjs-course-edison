import React, { useState } from 'react';


const TryUseState = () => {
  const [age, setAge] = useState(5)
  const [name, setName]= useState('')

  const onChangeAge = () => setAge(age + 1)
  const onChangeName = () => setName('Male')
  
  return (
    <div>
      <div>Xin chào: { name}</div>
      <div>Tuổi: {age}</div>
      <button
      onClick={onChangeAge}
      >
        Tăng tuổi thêm 1</button>
      <button
      onClick={onChangeName}
      >
        Hiển thị tên
      </button>
    </div>
  );
};

export default TryUseState;