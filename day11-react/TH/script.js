/** @format */

let dayTodo = [1, 4, 4, 4, 3, 2];

let isCheckDouble = dayTodo.every((day, index) => {
  //   console.log(index);
  console.log(dayTodo.indexOf(day));
  return index === dayTodo.indexOf(day);
});
// if (isCheckDouble) {
//   return todos;
// } else {
//   return 'double';
// }
