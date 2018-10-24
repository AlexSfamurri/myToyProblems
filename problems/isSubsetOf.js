/*! toyproblems v0.0.0 - MIT license */
'use strict';

/* eslint-disable no-extend-native */
Array.prototype.isSubsetOf = function(arr) {
  // your code here
  
  for(let i = 0; i < this.length; i++){
    if(!arr.includes(this[i])){
      return false;
    }
  }
  return true;
};
