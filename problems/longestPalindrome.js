'use strict';
const reverseEfficient = (array) => {
  const reversed = [];
  for(let i = array.length - 1; i > -1; i--){
    reversed.push(array.charAt(i));
  }
  return reversed.join('');
};

const longestPalindrome = function (string) {
  // Your code here
  let word = '';
  let longest = 0;
  const collectionOfWords = [];
  for(let i = 0; i < string.length; i++){
    for(let j = 0; j < string.length; j++){
      let testWord = string.substring(j, j + i + 1);
      if(testWord === reverseEfficient(testWord) && !collectionOfWords.includes(testWord)){
        collectionOfWords.push(testWord);
        if(testWord.length > longest){
          longest = testWord.length;
          word = testWord;
        }
      }
    }
  }

  return word;

};
