import React,{ useRef } from 'react';
import { MyAppContext } from './MyApp';



const MyComponent = () => {

  const inputRef = useRef(null)
 
  const handleClick = () => {
    console.log(MyAppContext);
  }
   console.log(inputRef);
 
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default MyComponent;