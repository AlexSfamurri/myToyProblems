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



Number.prototype.toEnglish = function () {
  // Your code here
  if(numbersToWords[this] !== undefined){
    return numbersToWords[this];
  }
  if(numbersToPlace[this] !== undefined){
    return 'one ' + numbersToPlace[this];
  }
  const numArray = this.toString().split('').reverse();
  let word = '';
  let temp = [];
  let isTeen = false;
  numArray.forEach((num, place)=>{
    if((place + 1) % 4 === 0 || (place + 1) % 3 === 0){
      let placeWord = '1';
      for(let i = 0; i < place; i++){
        placeWord += '0';
      }
      if (num === '0' && (place + 1) % 3 === 0 && numArray[place + 1]) {
        return;
      }
      if(num !== '0' && num){
        temp.push(numbersToWords[num] + ' ' + numbersToPlace[placeWord] + ' ');
      } else {
        temp.push(numbersToPlace[placeWord] + ' ')
      }
      return;
    }
    if((place + 1) % 2 === 0){
      if(num === '0'){
        return;
      }
      if (num > '1') {
        temp.push(numbersToWords[num + '0'] + '-');
        isTeen = false;
      } else {
        isTeen = true;
      }
      return;
    }
    if (isTeen) {
      temp.push(numbersToWords['1' + num] + ' ');
      isTeen = false;
      return;
    }
    if(num === '0'){
      return;
    }
    temp.push(numbersToWords[num] + ' ');
  });
  const result = temp.reverse().join('').split('');
  if (result[result.length - 1] === ' ' || result[result.length - 1] === '-'){
    result.pop();
  }
  return result.join('');
};
