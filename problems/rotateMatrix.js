 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotateMatrix = function(matrix, direction ) {
  // Your code here
  if(matrix.length < 2) {
    return matrix;
  }
  if(direction === -1){
    let result = matrix[0].map((col, index) => {
      return matrix.map((row) => {
        return row[index];
      });
    });
    return result.reverse();
  }
  let result = matrix.reverse()[0].map((col, index) =>{
    return matrix.map((row) => {      
        return row[index];
      });
    });
  
  return result;
};