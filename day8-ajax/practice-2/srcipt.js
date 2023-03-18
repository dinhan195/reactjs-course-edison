/** @format */

// let mouse = {
//   name: 'mickey',
//   age: 13,
//   routien: function () {
//     console.log(1234, this.name);
//   },
// };
// let cat = {
//   name: 'cat',
// };
// let abs = mouse.routien.bind(cat);
// abs();
// let mouse = {
//   name: 'mouse',
//   run: function () {
//     let a = () => {
//       console.log(this.name);
//     };
//     a();
//   },
// };
// mouse.run();
function abc() {
  let num = Array.from(arguments);

  console.log(num);
}
abc(1, 2, 3, 4, 5);
