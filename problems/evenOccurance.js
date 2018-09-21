 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const evenOccurrence = function (arr) {
  // Your code here.
  const countObj = {};

  for(let i = 0; i < arr.length; i++) {
    if(countObj[arr[i]] === undefined) {
      countObj[arr[i]] = { count: 1, index: i, isEven: false, ogValue: arr[i] };
    } else {
      countObj[arr[i]].count++;
      if(countObj[arr[i]].count % 2 === 0) {
        countObj[arr[i]].isEven = true;
      } else {
        countObj[arr[i]].isEven = false;
      }
    }
  }
  for(let key in countObj){
    if(countObj[key].isEven){
      return countObj[key].ogValue;
    }
  }
};
