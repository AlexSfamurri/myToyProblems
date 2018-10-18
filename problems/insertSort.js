 /*! toyproblems v0.0.0 - MIT license */
'use strict';

var testingTransform = array =>
  array.map((value, i) => ({ value, order: i }));
  
function insertionSort(array) {
  let tempArray = [].concat(array);
  if (typeof tempArray[0] === 'number') {
    tempArray = testingTransform(tempArray);
  }

  


  return array;
}
