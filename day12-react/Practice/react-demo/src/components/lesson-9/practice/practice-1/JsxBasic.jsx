const JsxBasic = () => {
  let name = 'Sarar'
  const user = {
    firstName: 'John',
    lastName: 'Smith'
  }
  const formatName = () => {
    return user.firstName + ' ' + user.lastName
  }
  return <div>
    <div>Hello: {name} and {formatName(user)}</div>
    <div>{ name === 'Sara' ? 'Hello Sara': 'Hello' + formatName(user)}</div>
    {/* <div>Nice to miss you</div> */}
  </div>
}
export default JsxBasic