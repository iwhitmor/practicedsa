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

test('Fizzbuzz return BUZZ if num is multiple of 5', () => {
  //Arrange
  let num = 5;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toEqual('Buzz');
});

test('Fizzbuzz returns FizzBuzz if num is multiple of 3 and 5', () => {
  //Arrange
  let num = 15;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toEqual('FizzBuzz');
});

test('Fizzbuzz returns FizzBuzz if num is multiple of 3 and 5', () => {
  //Arrange
  let num = 30;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toEqual('FizzBuzz');
});

