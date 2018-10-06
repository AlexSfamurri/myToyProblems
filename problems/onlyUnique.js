
'use strict';

function onlyUnique(str) {
  let word = '';

  for(let i = 0; i < str.length; i++){
    let isUnique = true;
    for(let j = 0; j < str.length; j++){
      if(i !== j && str.charAt(i) === str.charAt(j)){
        isUnique = false;
      }
    }
    if(isUnique){
      word += str.charAt(i);
    }
  }
  return word;
}
