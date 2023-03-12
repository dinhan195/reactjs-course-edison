/** @format */

// let person = {
//   name: 'John',
//   age: 21,
//   country: 'United States',
// };

// for (let key in person) {
//   console.log(person['age']);
// }

// let rectangles = [
//   { width: 10, height: 5 },
//   { width: 10, height: 20 },
//   { width: 4, height: 16 },
// ];

// let a = rectangles.map(function (rect) {
//   return rect.width * rect.height;
// });
// console.log(a);

class Person {
  name;
  age;
  country;
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}
let teachers = new Person('join', 28, 'United');
console.log(teachers);

class Students extends Person {
  sport;
  bicycle;
  constructor(sport, bicycle, name, age, country) {
    super(name, age, country);
    this.sport = sport;
    this.bicycle = bicycle;
  }
  getName() {
    console.log(`${this.name}`);
  }
}
let dinhan = new Students(
  'coccer',
  'everyday',
  'joining',
  35,
  'United kingdom'
);
console.log(dinhan);
dinhan.getName();
