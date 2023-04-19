import React, { useEffect, useState } from 'react';


function SetTime() {
  const [time, setTime] = useState(1);
  const [message, setMessage] = useState()

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    if (time >= 5) {
      setMessage(new Date().toLocaleTimeString())
      setTime(0)
    }
  }, [time]);
 

  return (
    <div>
      <h2>Bài tập 2</h2>
      <p>Timer: {time}</p>
      <p>Current time: {message}</p>
    </div>
  );

}

export default SetTime;
