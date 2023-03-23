/** @format */

//Part #1: Làm việc với string

// let str1 = 'My name is :';
// let str2 = 'Dylan';
// let str3 = `${str1} ${str2}`;
// console.log(str3);

// Part #2: Destructuring objects
// let information = { firstName: 'John', lastName: 'Doe' };
// let { firstName, lastName } = information;
// console.log(firstName, lastName);

//Part #3: Destructuring objects
// let [firstName, lastName, age] = ['Dylan', 'John', 20];
// console.log(firstName, lastName, age);

//Object Literal
// let firstName = 'John';
// let information = { firstName };
// console.log(firstName);

// //Part #5: VÒng lặp for... of
// let str = 'Hello1234';
// for (let char of str) {
//   console.log(char);
// }
// // Part #6: Spread syntax
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // function spread syntax
// function findLenght(...arr) {
//   console.log(arr.length);
// }
// findLenght(...arr1);

// // Part #7: Arrow function
// const square = (num) => num * num;
// console.log(111, square(4));

// Part#8: includes()
let str = 'Hello World';
console.log(str.includes('Hello'));
// Part#8: Class

class Car {
  constructor(wheels, doors) {
    this.wheels = wheels;
    this.doors = doors;
  }
  description() {
    console.log(`Door: ${this.wheels} and ${this.doors}`);
  }
}
const car1 = new Car(2, 5);
car1.description();

// Part #9: Promise, async và await

function takeLongTimes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('longTimes');
    }, 10000);
  });
}
async function test() {
  const a = await takeLongTimes();
  console.log(a);
}
test();
