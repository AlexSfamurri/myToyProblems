 /*! toyproblems v0.0.0 - MIT license */
'use strict';
function nestedWordCount(wordList) {
  const wordLog = {};
  let most = 0;
  let result = '';
  wordList.forEach(( word, index) => {
    wordList.forEach(innerWord => {
      if(innerWord.includes(word) && innerWord !== word){
        wordLog[innerWord] = wordLog[innerWord] + 1 || 1;
        if (wordLog[innerWord] > most){
          most = wordLog[innerWord];
          result = innerWord;
        }
      }
    });
  });
  return result;
}