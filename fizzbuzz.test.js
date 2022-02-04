const { expect, it } = require('@jest/globals');
const { test } = require('picomatch');
const { describe } = require('yargs');
const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz', () => {
  it('OK, Fizzbuzz returns 1', () => {
    expect(fizzbuzz(1)).to.equal(1);
  })
});