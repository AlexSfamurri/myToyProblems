 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const sumArray = function (array) {
  // TODO: Your code here
  let largest;
  let sum = array.reduce((sum, current) => {
    if (largest === undefined || largest < current) {
      largest = current;
    }
    if (sum > largest && sum !== 0) {
      largest = sum;
    }
    return sum + current;
  }, 0);
  let reverseSum = 0;
  for (let i = array.length - 1; i > -1; i--) {
    reverseSum += array[i];
    if (reverseSum > largest) {
      largest = reverseSum;
    }
  }

  return sum > largest ? sum : largest;
};