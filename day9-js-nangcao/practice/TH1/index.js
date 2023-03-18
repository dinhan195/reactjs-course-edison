/** @format */
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
