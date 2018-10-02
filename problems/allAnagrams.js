 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const allAnagrams = function (string) {
  // Your code here.
  const solutionStorage = {};

  // while (Object.keys(solutionStorage) < string.split('').length) {
  //   const temp = string.split('');
  //   const tempWord = [];
  //   for(let i = 0; i < temp.length; i++){
  //     tempWord.push(temp.splice(getRandomIndex(temp.length)))
  //   }
  //   let word = tempWord.join('');
  //   solutionStorage[word] = word;
    
  //   console.log(solutionStorage); 
  // }
  const LENGTH = string.split('').length;
  while(Object.keys(solutionStorage).length < LENGTH * 4){
    const temp = string.split('');
    let word = '';
    for(let i = 0; i < LENGTH; i++){
      word += temp.splice(getRandomIndex(temp.length));
    }
    word = word.split(',').join('');

    console.log(word);
    solutionStorage[word] = word;
    console.log(solutionStorage);
    
  }
  const solution = Object.keys(solutionStorage)
  
  console.log(solution);
  
  return solution;
};
