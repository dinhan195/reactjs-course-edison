import { useState} from "react"
import UseForm from "./UseForm"


 function Greeting() {

  const [name, setName]= useState()

  const handleInput = (e) => { 
    setName(e.target.value)
  }

  return (
    <div className="form">
      <label htmlFor="">Name</label>
      <input value={name} type="text" onChange={(e)=> handleInput(e)} />
      <UseForm name={ name} />
    </div>
  )
}
export default Greeting