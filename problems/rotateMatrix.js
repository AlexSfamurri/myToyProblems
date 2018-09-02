 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotateMatrix = function(matrix, direction ) {
  // Your code here
  if(matrix.length < 2) {
    return matrix;
  }
  let result = matrix.reverse()[0].map((col, index) =>{
    return matrix.map((row) => {      
        return row[index];
      });
    });
  if(direction === -1){
    result = result.reverse();
  }
  
  return result;
};