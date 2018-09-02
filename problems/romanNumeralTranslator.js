 /*! toyproblems v0.0.0 - MIT license */
'use strict';


var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
let at = 0;
const next = (string) => {
  let charAt = string.charAt(at);
  let lastChar = null;
  if (at > 0) {
    lastChar = string.charAt(at - 1);
  }
  at++;

  return [lastChar, charAt];
};

const translateRomanNumeral = function(romanNumeral){
  // TODO: Implement me!
  if(typeof romanNumeral !== 'string') {
    return null;
  }
  at = 0;

  
  let value = 0;

  let currentContext = next(romanNumeral);
  while (currentContext[1]) {
    
    if ( DIGIT_VALUES[currentContext[0]] >= DIGIT_VALUES[currentContext[1]] || currentContext[0] === null) {
      value += DIGIT_VALUES[currentContext[1]];
    } else if (DIGIT_VALUES[currentContext[0]] < DIGIT_VALUES[currentContext[1]]) {
      value += DIGIT_VALUES[currentContext[1]] - (DIGIT_VALUES[currentContext[0]] * 2);
    }
    currentContext = next(romanNumeral);
  }
  return value;
};
