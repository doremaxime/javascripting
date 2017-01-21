'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = numbers.filter(function (e) {
  return (e%2 === 0);
});


console.log(max);
