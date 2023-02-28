/** @format */

const myMap = new Map();

// myMap.set("a", 1);

myMap.set("b", 2);

myMap.set("c", 3);

// console.log(myMap.get("a"));
console.log(myMap.get("b"));
console.log(myMap.get("c"));

function findMaxNumber(numbers) {
  if (!numbers || !numbers.length) return "Lỗi";

  let max = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (max < numbers[index]) {
      max = numbers[index];
    }
  }

  return max;
}

console.log("Max number is ", findMaxNumber([1, 2, 3]));
