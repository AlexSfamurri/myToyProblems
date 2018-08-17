 /*! binarySearch v0.0.0 - MIT license */
'use strict';

const binarySearch = function (array, target, start, end, count = 0) {
  // your code goes here
  if(start === undefined){
    start = 0;
  }
  if(end === undefined){
    end = array.length - 1;
  }
  
  let midPoint = Math.floor((end + start) / 2);
  if(array[start] === target){
    return start;
  }
  if(array[end] === target){
    return end;
  }
  if(array[midPoint] === target){
    return midPoint;
  }
  if(count > Math.floor(array.length)){
     return -1;
  }
  if(target > array[midPoint]){
     return binarySearch(array, target, midPoint, end, count + 1);
  }
  if(target < array[midPoint]){
    return binarySearch(array, target, start, midPoint, count + 1);
  }
  return null;
  
}
