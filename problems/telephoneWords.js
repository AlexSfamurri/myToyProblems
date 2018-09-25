 /*! toyproblems v0.0.0 - MIT license */
'use strict';

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function (digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  const results = [];
  
  const digitWordConverter = (word, digits) => {
    if(digits.length === 0){
      return results.push(word);
    }

    phoneDigitsToLetters[digits[0]].split('').forEach(letter => {
      digitWordConverter(word + letter, digits.slice(1));
    });
  };
  digitWordConverter('', digitString.split(''));
  return results;
};
