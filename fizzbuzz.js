function fizzbuzz(num) {
  for (let i = 1; i < 101; i++) {
    if (num % 15 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    }
  }
  return num;
}

module.exports = fizzbuzz;