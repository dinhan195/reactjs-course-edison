import { useState } from "react"
import styles from './styles.module.css'


export function ConvestColor() {
  const [numClicked, setNumClicked] = useState(0)
  const handleClick = () => { 
    setNumClicked((current) => {
  return current + 1  
    })
  }
const textStyle = (numClicked % 2 ===0)? styles.textBlue : styles.textRed
  return(
    <div>
      <button onClick={handleClick}>Click here</button>
      <h1
        style={{color: (numClicked % 2 === 0) ? 'green' : 'purple'}}
    
    
        className={textStyle}>You clicked {numClicked} times</h1>
   </div>
  )
}