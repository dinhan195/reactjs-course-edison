/** @format */

function numberMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
let array = [1, 2, 3, 4, 5];
let maxNumber = numberMax(array);
console.log("Max number is: ", maxNumber);
