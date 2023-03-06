/** @format */

function reverseString(string) {
  // Coding here
  let convestArray = string.split('');
  let reverse = convestArray.reverse();
  let convestString = reverse.join('');
  console.log(`Redult: ${convestString}`);
}

reverseString('hello there');

let string = 'hello there';
string.join('');
