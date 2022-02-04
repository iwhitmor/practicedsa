const { expect, it, test } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz returns 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('fizzbuzz return 2', () => {
  expect(fizzbuzz(2)).toBe(2);
});