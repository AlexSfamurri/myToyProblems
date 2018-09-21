/*! toyproblems v0.0.0 - MIT license */
'use strict';

function zeroSum(numbers) {
  // Write your code here, and
  // return your final answer.
  const testObj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (testObj[Math.abs(numbers[i])] === undefined) {
      testObj[numbers[i]] = { value: numbers[i] };
    } else {
      if (numbers[i] + testObj[Math.abs(numbers[i])].value === 0) {
        return true;
      }
    }
  }
  return false;
}
