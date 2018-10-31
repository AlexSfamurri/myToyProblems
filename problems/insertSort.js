/*! toyproblems v0.0.0 - MIT license */
'use strict';

const testingTransform = array =>
  array.map((value, i) => ({ value, order: i }));

function insertionSort(array, comparator){
  if(comparator === undefined) {
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      let j = i - 1;
      while (j >= 0 && array[j].value > value.value) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = value;
    }
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      let j = i - 1;
      while (j >= 0 && comparator(array[j], value) > 0) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = value;
    }
    return array;
  }

}
