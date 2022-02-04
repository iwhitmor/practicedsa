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
  let num = 1;
  //Act
  let result = fizzbuzz(num);
  //Assert
  expect(result).toBe(1);
});