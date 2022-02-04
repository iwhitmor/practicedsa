const { expect, it, test } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz returns 1', () => {
  //Arrange 
   let num = 1;
   //Act
   let result = fizzbuzz(num);
  //Assert
  expect(result).toBe(1);
});

test('fizzbuzz returns 2', () => {
  //Arrange
  let num = 2;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toBe(2);
});

test('Fizzbuzz returns FIZZ if num is 3', () => {
  //Arrange
  let num = 3;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toEqual('Fizz');
});