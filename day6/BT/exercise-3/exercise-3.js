/** @format */

function removeFromArray(array, deleteItem) {
  // Coding here
  return array.filter((item) => item !== deleteItem);
}
console.log(removeFromArray([1, 2, 3, 4], 3));

let remove = removeFromArray.apply;
