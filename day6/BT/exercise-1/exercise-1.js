/** @format */

function repeatString(string, num) {
  // Coding here
  if (!string || !num) return;
  let result = '';
  for (let i = 0; i < 3; i++) {
    result += string;
  }
  return result;
}
let fn = repeatString('hey', 3);
console.log(fn);
