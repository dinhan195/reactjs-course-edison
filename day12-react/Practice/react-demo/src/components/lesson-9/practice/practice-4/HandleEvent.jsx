import { useState } from "react"
function HanderEvent() {
  const [userInput, setUserInput] = useState("")
  const handleInputChange = (event) => { 
    setUserInput(event.target.value)
  }
  const handleButtonClick = (event) => { 
    console.log(userInput);
  }

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="Please type somthing"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Print</button>
    </div>
  )
}
export default HanderEvent