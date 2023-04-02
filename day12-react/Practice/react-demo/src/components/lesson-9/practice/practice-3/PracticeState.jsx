import { useState } from "react"

export default function PraciceState() {
  const [age, setAge] = useState(0)
  const [name] = useState('hey')
  const onIncreaseAge = () => {
    setAge(age + 1)
  }
  return (
    <div>
      <div>{age}</div>
      <div onClick={onIncreaseAge}>Tăng lên 1</div>
      <DemoComponent age={age}
      name={name}
      />
    </div>
  )
}
const DemoComponent = (props) => {
  return (
    <>
      <div>This is: { props.age}</div>
      <div>This is: { props.name}</div>
    </>
  )
}