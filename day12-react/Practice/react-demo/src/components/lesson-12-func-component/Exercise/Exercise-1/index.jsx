import React, { useState } from 'react';

const MyApp = () => {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [sum, setSum] = useState()
  const [multiply, setMultiply] = useState()

  const handleCalculate = () => {
    setSum(parseInt(num1) + parseInt(num2))
    setMultiply(num1 * num2)
    setNum1('')
    setNum2('')
  }

  return (  
    <div>
      <h2>Bài tập 1</h2>
      <input
        value={num1}
        type="number"
        onChange={(e)=> setNum1(e.target.value)}
      />
      <br />
      <input
        value={num2}
        type="number"
         onChange={(e)=> setNum2(e.target.value)}
      />
      <br />
      <button onClick={handleCalculate} >Caculate</button>
      
      <div>Result sum: {sum}</div>
      <div>Result multiply: {multiply }</div>
    </div>
  );
};

export default MyApp;