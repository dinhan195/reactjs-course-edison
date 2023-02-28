/** @format */

let str = "one";
let str2 = "two";

console.log("original ", str);
console.log("original ", str2);

let str3 = str;
str = str2;
str2 = str3;

console.log("swap", str);
console.log("swap ", str2);
