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
  let numStr = this.toString();
  let number = [];
  let section = '';
  let place = '1';
  let counter = 0;
  let result = '';
  let notAllZeros = false;

  if (numStr === '0') {
    return 'zero';
  }

  if (numStr.length > 3) {
    for (let i = numStr.length - 3; i > -3; i -= 3) {
      let start = Math.max(0, i);
      number.unshift(numStr.slice(start, i + 3));
    }
  } else {
    number.push(numStr);
  }
  counter = number.length - 1;
  for (let j = 0; j < number.length; j++) {
    let piece = number[j];
    let length = piece.length - 2;
    for (let k = 0; k < piece.length; k++) {
      if (length === 1) {
        if (piece[k] === '0') {
          length--;
          continue;
        }
        section += numbersToWords[piece[k]] + ' ' +
          numbersToPlace['100'] + ' ';
        notAllZeros = true;
      } else if (length === 0) {
        if (piece[k] === '1') {
          section += numbersToWords[piece[k] + piece[k + 1]] + ' ';
          notAllZeros = true;
          k++;
          continue;
        } else if (piece[k] === '0') {
          length--;
          continue;
        } else if (piece[k + 1] === '0') {
          section += numbersToWords[piece[k] + '0'] + ' ';
          notAllZeros = true;
          continue;
        } else {
          section += numbersToWords[piece[k] + '0'] + '-';
          notAllZeros = true;
        }
      } else {
        if (piece[k] === '0') {
          continue;
        }
        section += numbersToWords[piece[k]] + ' ';
        notAllZeros = true;
      }
      length--;
    }
    result += section;
    section = '';
    if (notAllZeros) {
      if (counter > 0) {
        for (let l = 0; l < counter; l++) {
          place += '000';
        }
        result += numbersToPlace[place] + ' ';
      }
    }
    notAllZeros = false;
    counter--;
    place = '1';
  }

  return result.slice(0, -1);
};