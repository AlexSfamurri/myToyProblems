/*! toyproblems v0.0.0 - MIT license */
'use strict';

var nthFibonacci = function(n) {
  // TODO: Implement me!
  let first = 0;
  let second = 1;
  let result;
  if (n === 0) {
    return first;
  }
  if (n === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

