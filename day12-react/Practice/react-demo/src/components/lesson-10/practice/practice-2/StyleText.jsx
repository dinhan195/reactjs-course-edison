import styled from 'styled-components'



const StyledText = styled.h1`
clolor: ${(props) => {
  if (props.numClicked % 2 === 0) {
    return "yellow"
  }
  return "lightblue"
}}
`


// export function ConvestColorText() {
//   return (
//     <div>
//       <button onClick={handleClicked}>Click here</button>
//         <StyledText numClicked={numClicked}>
//         <h1>You click {numClicked} times</h1>
//     </StyledText>
//   </div>
//   )
// }
