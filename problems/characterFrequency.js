 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const characterFrequency = function(string){
  // Your code here
  const letterValues = {};
  const results = [];

  string.split('').forEach(letter => {
    if(letterValues[letter] === undefined){
      letterValues[letter] = 1;
      return;
    }
    letterValues[letter]++;
    return;
  });

  let keyValueTuples = Object.keys(letterValues).map(key =>{
    return [key, letterValues[key]];
  });
  let sorted = false;
  // debugger;
  keyValueTuples = keyValueTuples.sort();
  while(sorted === false){
    sorted = true;
    for(let i = 0; i < keyValueTuples.length; i++){
      if (i + 1 !== keyValueTuples.length && keyValueTuples[i][1] < keyValueTuples[i + 1][1]){
        sorted = false;
        let swap = keyValueTuples[i];
        keyValueTuples[i] = keyValueTuples[i + 1];
        keyValueTuples[i + 1] = swap;
      }
    }
  }
  console.log(keyValueTuples);
  


  return keyValueTuples;
};
