 /*! toyproblems v0.0.0 - MIT license */
'use strict';
/**Write a function that, given two objects, returns whether or
 *  not the two are deeply equivalent--meaning the structure of 
 * the two objects is the same, and so is the structure of each
 *  of their corresponding descendants.
 * 
 */
const deepEquals = function(a, b){
  // Your code here
  const keyA = Object.keys(a);
  const keyB = Object.keys(b);

  if(!keyA.length && !keyB.length){
    return true;
  }else if(keyA.length !== keyB.length){
    return false;
  }else{
    return keyA.filter((key, index)=> {
      if(key === keyB[index]){
        if (typeof a[key] === 'object' && typeof b[keyB[index]] === 'object'){
          return deepEquals(a[key], b[keyB[index]]);
        }
        return a[key] === b[keyB[index]];
      }else{
        if (typeof a[key] === 'object' && typeof b[key] === 'object'){
          return deepEquals(a[key], b[key]);
        }
        return a[key] === b[key];
      }
    }).length === keyA.length;
  }
};