 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotatedArraySearch = function(rotated, target) {
  // Your code here
  let result = -1;

  for(let i = 0; i < rotated.length; i++){
    if(rotated[i] === target){
      return i;
    }
  }


  return result;
};

