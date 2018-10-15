
'use strict';

function zipSum(arr1, arr2) {
  const result = [];

  const run = arr1.length > arr2.length ? arr1.length : arr2.length;
  for(let i = 0; i < run; i++){
    if (arr1[i] === undefined){
      // result[i] = arr2[i];
    } else if (arr2[i] === undefined){
      // result[i] = arr1[i];
    } else {
      result[i] = arr1[i] + arr2[i];
    }
  }

  return result;
}
