/** @format */

// var arr = ["1", "2", "3", "4", "5"];
// console.log(typeof arr.toString());

// var arr = ["1", "2", "3", "4", "5"];
// var arr1 = ["1", "2", "3", "4", "5"];
// console.log(arr.splice(0, 1, "h"));
// console.log(arr);
// //splice(chon, xoa, them)

// function getName(name) {
//   return ``;
// }

// console.log(getName("asd"));

// function multifly(a, b, callbacks) {
//   var result = a * b;
//   callbacks(result);
// }

// function result(result) {
//   console.log("Result:" + result);
// }
// multifly(5, 10, result);

// var arr = ["b", "c", "d", "e"];

// const mapArray = arr.map(function (value, index, arr) {
//   console.log(value, index, arr);
//   return `${value}-`;
// });
// console.log(mapArray);

// const array = [1, 2, 3, 4, 5];
// let reduceArr = array.reduce(function (prev, curren, index, arr) {
//   console.log(prev, curren, index, arr);
//   return prev + curren;
// }, 0);
// console.log(reduceArr);

// let ojb = {
//   name: "test",
//   age: "12",
// };
// console.log(ojb.name);
// console.log(ojb["age"]);
// // console.log(ojb.function());
// function Person(name, age, func) {

//   this.name = name;
//   this.age = age;
//   this.func = func;
// }
// Person.prototype.age;
// const user = new Person("a", 20, function () {
//   console.log("sfd");
// });
// console.log(user);
// const user1 = new Person("a", 20, function () {
//   console.log("sfd");
// });
// console.log(user1);

try {
  var x = y + 10;
} catch (error) {
  console.log(error.name + ": " + error.message);
} finally {
  console.log("Test finished try catch");
}
