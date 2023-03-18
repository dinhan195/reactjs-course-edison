/** @format */

// let doSecond = () => {
//   console.log('doSecond');
// };
// let doFirst = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('doFirst');
//     resolve();
//   }, 1000);
// });
// doFirst.then(doSecond);

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('dhhdf');
//     }, 1000);
//   });
// }
// async function printData() {
//   const data = await fetchData();
//   console.log(data);
// }
// printData();
import { Animals } from './script1.js';
class Cats extends Animals {
  constructor(name, age, description) {
    super(name, age);
  }
  sing() {
    return `${this.name} ${this.age}`;
  }
}
const cat = new Animals('meo', 22);
console.log(cat);
