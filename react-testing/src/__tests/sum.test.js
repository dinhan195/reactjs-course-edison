/** @format */

import sum from '../utills/sum';

test('2 + 3 =5', () => {
  expect(sum(2, 3)).not.toEqual(4);
});

//test string

test('There is ni I in team', () => {
  expect('team').toMatch(/te/);
});

//Test Array or object
const shoppingList = ['diaper', 'milk', 'traachs bangd'];

test('The shopping list has milk in it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroiCode() {
  throw new Error('You are useing the wrong JDK');
}

test('Compile android goes as expected', () => {
  expect(() => compileAndroiCode()).toThrow();
  expect(() => compileAndroiCode()).toThrow(Error);
  expect(() => compileAndroiCode()).toThrow('You are useing the wrong JDK');
  expect(() => compileAndroiCode()).toThrow(/JDK/);
});
