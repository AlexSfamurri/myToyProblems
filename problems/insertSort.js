 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const testingTransform = array =>
  array.map((value, i) => ({ value, order: i }));
  
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      for (var j = i - 1; j > -1 && array[j] > value; j--) {
        array[j + 1] = array[j]
      }
      array[j + 1] = value
    }
    return array;
}
