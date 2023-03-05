/** @format */

function removeFromArray(array, deleteItem) {
  // Coding here
  let result = array.filter((item) => item !== deleteItem);
  console.log(result);
}
removeFromArray([1, 2, 3, 4], 3);
