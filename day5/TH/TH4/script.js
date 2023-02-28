/** @format */

let amount = prompt("Số tiền:");
let rate = prompt("Lãi vay:");
let months = prompt("Tháng vay:");

function calculator() {
  const interest = (amount * (rate * 0.01)) / months;
  const total = amount / months + interest;
  4;
  alert(total.toFixed(2));
}
calculator();
