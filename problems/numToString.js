 /*! toyproblems v0.0.0 - MIT license */
'use strict';

/* eslint-disable no-extend-native */
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

let at = 0;
let place;
const next =(reversedNumbers) => {
  let charAt = reversedNumbers.charAt(at);
  at++;
  place += place ? 1 : 0;
  return charAt;
}

Number.prototype.toEnglish = function () {
  // Your code here
  let word = '';
  if(numbersToWords[this]){
    return numbersToWords[this];
  }
  if(numbersToPlace[this]){
    return 'one ' + numbersToPlace[this];
  }
  let num = this.toString().split('').reverse();
  let placeCount = '10';
  num.forEach((number, index) => {

  });
  word = word.reverse().join('');
  // let word = '';
  // let num = this;
  // const numToPlaKeys = Object.keys(numbersToPlace);
  // // need to find the place
  // let placeCount = 0;
  // let ran = false;
  // for(let key in numbersToPlace){
  //   if(Number(key) > this){
  //     const numKey = Number(numToPlaKeys[numToPlaKeys.indexOf(key) - 1]);
  //     if(numbersToPlace[num]){
        
  //     }
  //     while(num - numKey > 0){
  //       num -= numKey;
  //       placeCount++;
  //       console.log(placeCount);
  //       ran = true;
  //     }
  //     if (placeCount * numKey !== 10 && ran === true){
  //       ran = false;
  //       word += numbersToWords[placeCount * numKey];
  //     }
  //   }
  // }
  // word += '-' + numbersToWords[num];
  return word;
};
