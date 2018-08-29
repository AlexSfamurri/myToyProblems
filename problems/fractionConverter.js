 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const toFraction = function(number) {
  // Your code here
  let result = '';
  let arrayOfNumber = number.toString().split('');

  
  if(arrayOfNumber.indexOf('.') === -1) {
    return number.toString() + '/1';
  }
  const numOfDecimalPlaces = arrayOfNumber.slice(arrayOfNumber.indexOf('.')+1).length;
  let denominator = 10 ** numOfDecimalPlaces;
  let numerator = Math.floor(number * denominator);

  let divsor;
  if(numerator < 0){
    divsor = gcd(-numerator, denominator);
  } else {
    divsor = gcd(numerator, denominator);
  }
  while(numerator % divsor === 0 && denominator % divsor === 0 && divsor !== 1) {
    numerator /= divsor;
    denominator /= divsor;
  }
  
  result = numerator.toString() + '/' + denominator.toString(); 
  return result;
};

const gcd = function(x, y, hasRun = false) {
  //use euclyids algorithm
  //if x is less than or equal to zero or y is less than 0 or if y is eqaul to zero and the function has not fired at least once
  if(x <= 0 || y < 0 || (y === 0 && hasRun === false)){
      //invalid inputs return null
      return null;
  }
  //if y is equal to zero
  if(y === 0){
      //return x
      return x;
  }

  //recurse by putting y where x was and x%y where y was and since we have run at least once to true
  return gcd(y, x%y, true);
  
};
