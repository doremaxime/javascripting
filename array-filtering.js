'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers.filter(function (numbers) {
  numbers = (numbers%2 === 0);
  return numbers;
});


console.log(numbers);
