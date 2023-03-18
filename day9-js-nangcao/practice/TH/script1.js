/** @format */

export class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing() {
    return `${this.name} ${this.age}`;
  }
}
const cat = new Animals('meo', 22);
