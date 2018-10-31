'use strict';
// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.

var bubbleSort = function (array) {
  // Your code here.
  let sorted = false;

  while(!sorted) {
    sorted = true;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        sorted = false;
        let swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
      }
    }
  }
  return array;
};
