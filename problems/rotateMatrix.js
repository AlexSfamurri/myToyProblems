 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotateMatrix = function(matrix, direction ) {
  // Your code here
  let result = [];
  if(matrix.length < 2) {
    return matrix;
  }
  const rowLength = matrix.length,
        columnLength = matrix[0].length;
  //so for a 2x2 array we want [0,0] to be in [0,1] and [0,1] to be in [1,1]
  //should create an empty matrix of the same size and shape
  for(let i = 0; i < rowLength; i ++){
    result.push([]);
    for(let j = 0; j < columnLength; j++){
      result[i].push(matrix[j]);
    }
  }
  console.log(result);
  //so if the array is larger than a 2x2 then the inside needs to rotate as well and it wont be able to the same way the outer can otherwise it is just snaking through
  

  
  return result;
};