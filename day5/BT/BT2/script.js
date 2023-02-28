/** @format */

function canNest(a, b) {
  let minA = Math.min.apply(null, a);
  let maxA = Math.max.apply(null, a);
  let minB = Math.min.apply(null, b);
  let maxB = Math.max.apply(null, b);
  if (minA > minB && maxA < maxB) {
    return true;
  } else return false;
}

let arr1 = canNest([1, 2, 3, 4], [0, 10]); // ➞ true
console.log("Input [1, 2, 3, 4], [0, 10] =>", arr1);
let arr2 = canNest([3, 1], [6, 0]); //➞ true
console.log("Input [3, 1], [6, 0] => ", arr2);
let arr3 = canNest([1, 2, 3], [2, 3]); //➞ false
console.log("Input [1, 2, 3], [2, 3] => ", arr3);
