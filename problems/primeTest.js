 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const primeTester = function(n){
  // TODO: return true if n is prime, false otherwise
  if(n <= 1){
    return false;
  }
  if(n <= 3){
    return true;
  }
  if(n % 2 === 0 || n % 3 === 0){
    false;
  }
  let i = 5;
  while(i * i <= n){
    if( n % i === 0 || n % (i + 2) === 0){
    return false;
    }
    i+=6;
  }
  // const testOne = Math.pow((n - 1), n) % n;
  // const testTwo = Math.pow((n - 2), n) % n;
  // const testThree = Math.pow((n - 3), n) % n;

  // if(testOne === n - 1 && testTwo === n - 2 && testThree === n - 3){
  //   return true;
  // }
  // return false;
  return true;
};






const range = function(start, end){
  // Your code here
};
