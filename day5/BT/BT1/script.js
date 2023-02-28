/** @format */

let marks = [6, 10, 7, 9];
console.log("Input: " + marks);
let marksSum = 0;
for (let i = 0; i < marks.length; i++) {
  marksSum += marks[i];
}
const avg = (marksSum / marks.length).toFixed(2);
console.log("Average: " + avg);
if (avg < 7) {
  console.log("Grade: D");
} else if (avg > 7 && avg <= 8) {
  console.log("Grade: C");
} else if (avg > 8 && avg <= 9) {
  console.log("Grade: B");
} else {
  console.log("Grade: D");
}

// const arr = [1, 2, 3];
// let sum = 0;
// for (const a of arr) {
//   sum += a;
// }
// const avg = sum / arr.length;
// console.log(sum);
// console.log(avg);
