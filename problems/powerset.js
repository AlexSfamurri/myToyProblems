 /*! powerSet v0.0.0 - MIT license */
'use strict';
const powerSet = function(str){
  // Your code here
  let results = [];
  results.push(str);
  str = str.split('');
  //wrap this in a recursive functon for larger than 3 letters
  //where n is the number of letters in the original string
  str.forEach(letter => {
    results.push(letter);
  });
  const setMaker = function(n, otherLetter) {
   if(n === str.length){
     return;
   }

   str.forEach(letter => {

    if(otherLetter && letter !== otherLetter){
      letter = otherLetter + letter;

      results.push(letter);
    }
     setMaker(n + 1, letter);
   });
  

  };
  setMaker(0);
  const uniquePicker = function(value, index, collection) {
    return collection.indexOf(value) === index;
  };
  const sortSet = function(set){
    return set.split('').sort().join('');
  };
  for(var i = 0; i < results.length; i++){
    results[i] = sortSet(results[i]);
  }
  results.push('');
  //now we need to group letters together
  return results.filter(uniquePicker);
};
