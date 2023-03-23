/** @format */

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// setTimeout(function () {
//   console.log(3);
// }, 0);
// console.log(4);

// let stocks = {
//   Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('production has started');
//     setTimeout(() => {
//       console.log('The fruit has been chopped');
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log('start the machine');
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log('serve Ice cream');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };
// production();
// let haapyHanding = (message) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (message === 'Yes') {
//         resolve('ok');
//       } else {
//         reject('error vao day');
//       }
//     }, 2000);
//   });
// };

// haapyHanding('Ye')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function haapyHanding() {
//   return 'Hello  world';
// }
// haapyHanding().then((res) => {
//   console.log(res);
// });

// async function haapy() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), 1000);
//   });
//   let result = await promise;

//   promise
//     .finally((result) => {
//       console.log('Promise ready');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   haapy();
// }
// function message() {
//   let result = 'first!';
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });
// }

// message().then((result) => {
//   console.log(result);
// });

// let array = [
//   { date: 2, message: 'titel1' },
//   { date: 4, message: 'titel2' },
//   { date: 9, message: 'titel5' },
//   { date: 35, message: 'titel7' },
//   { date: 1, message: 'titel2' },
// ];
// array.sort(function (a, b) {
//   return b.date - a.date;
// });
// console.log(array);
// let date = new Date();
// console.log(typeof date);
function Mouse() {
  this.name = 'mouse';
  this.age = 10;
  this.height = 0;
}
let mouse1 = new Mouse();
let mouse2 = new Mouse();
let mouse3 = new Mouse();
console.log(mouse1, mouse2, mouse3);
let array = [mouse1, mouse2, mouse3];
console.log(array);
array.forEach(function (value) {
  console.log(value.name);
});
