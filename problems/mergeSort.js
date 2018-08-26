 /*! toyproblems v0.0.0 - MIT license */
'use strict';

// Merge two sorted arrays in sorted order
const merge = function(left, right) {
  // Your code here
  const result = [];
  // let leftDex = 0;
  // let rightDex = 0;

  // if(left[left.length - 1] < right[0]){
  //   return left.concat(right);
  // }
  // while(leftDex < left.length && rightDex < right.length){
  //   if(left[leftDex] < right[rightDex]){
  //     result.push(left[leftDex]);
  //     leftDex++;
  //   }

  //   if(right[rightDex] < left[leftDex]){
  //     result.push(right[rightDex]);
  //     rightDex++
  //   }
  // }
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left.slice()).concat(right.slice());
};

const mergeSort = function(array) {
  // Your code here.
  if(array.length === 1){
    return array;
  }
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);
  
  return merge(mergeSort(left), mergeSort(right));

};