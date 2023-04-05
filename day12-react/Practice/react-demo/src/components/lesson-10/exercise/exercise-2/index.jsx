import { useState } from 'react'

import './styles.css'

export default function ChangeStyle() {
const [time, setTime]= useState('day')

  const handleClick = (e) => {
    const btn = e.target.id
    
    if (btn === 'night') { 
      setTime((time) => time = 'night'
       )
    } else {
      setTime((time) => time = 'day')
    } 
}
  return (
    <div>
      <button id='night' onClick={(e)=>handleClick(e)}>Night</button>
      <button id='day' onClick={(e)=>handleClick(e)} >Day</button>
      <div className={time}>interface</div>
    </div>
  )
}