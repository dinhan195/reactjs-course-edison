export default function HelloWorld() {
  let user = {
    firstName: 'John',
    lastName: 'Doe',
  }
  const fomatName = user => {
    return user.firstName + ' ' + user.lastName
  }
  return (<div>
    <div>Hello World {user.firstName}: {fomatName(user)}</div>
    <div>{user.firstName === 'John' ? 'Hello: John': `Hello: ${fomatName(user)}`}</div>
    <div>Nice to miss you</div>
  </div>)
}

// import { useState } from "react";

// export default function HelloWorld(props) {
//   function handleSubmit(event) { 
//     event.preventDefault();
//     console.log('Submit');
//   }
//   const [date] = useState(new Date())
//   console.log(date);

//   return <div>
//     <h2>Name: {props.name} và Title: {props.title}</h2>
//     <h3>useState: {date.getFullYear()}</h3>
//     <button onClick={handleSubmit}>Submit</button>
//   </div>;
// }