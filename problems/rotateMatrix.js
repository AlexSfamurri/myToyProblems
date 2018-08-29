 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotateMatrix = function(matrix, direction ) {
  // Your code here
  let result = [];
  if(matrix.length < 2) {
    return matrix;
  }
  // debugger;
  //run through the outer array of the matrix
  matrix.forEach((rows, rowIndex, matrix) => {
    //run through the inner array of the matrix
    result.push([]);
    rows.forEach((column, colIndex, rows) =>{
      //insert current value in opposite index locations of result
      result[rowIndex].push([]);
    })
  });
  matrix.forEach((rows, rowIndex, matrix) => {
    //run through the inner array of the matrix
    rows.forEach((column, colIndex, rows) =>{
      //insert current value in opposite index locations of result
      let outter = (matrix.length -1) - rowIndex;
      let inner = (rows.length - 1) - colIndex 
      result[outter][inner] = column;
      
    })
  });
  return result;
};