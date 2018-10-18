 /*! toyproblems v0.0.0 - MIT license */
'use strict';

var testingTransform = array =>
  array.map((value, i) => ({ value, order: i }));
  
function insertionSort(array) {
  let tempArray = [].concat(array);
  if (typeof tempArray[0] === 'number') {
    tempArray = testingTransform(tempArray);
  }
  let insert = undefined;

  while (insert !== null) {
    tempArray = tempArray.map((current, index) => {
      if (insert === undefined) {
        insert = current;
      }
      if (insert.value < current.value) {
        let replace = insert;
        insert = current;
        return replace;
      }
      if (insert.value === current.value && insert.order < current.order) {
        let replace = insert;
        insert = current;
        return replace;
      }
      if (index === tempArray.length - 1 && insert === tempArray[index]) {
        insert = null;
      }
      return current;
    })
  }
  
  tempArray.forEach((obj, index) => {
    array[index] = obj;
  })



  return array;
}
