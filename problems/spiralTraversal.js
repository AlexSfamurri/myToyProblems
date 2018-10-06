/*! toyproblems v0.0.0 - MIT license */
'use strict';

const rotateMatrix = function (matrix, direction) {
  // Your code here
  if (matrix.length < 2) {
    return matrix;
  }
  if (direction === -1) {
    let result = matrix[0].map((col, index) => {
      return matrix.map((row) => {
        return row[index];
      });
    });
    return result.reverse();
  }
  let result = matrix.reverse()[0].map((col, index) => {
    return matrix.map((row) => {
      return row[index];
    });
  });

  return result;
};

const spiralTraversal = function (matrix) {
  // TODO: Implement me
  let result = [];
  if (matrix[0].length === 1) {
    return matrix.reduce((flattened, currentArr) => {
      return flattened.concat(currentArr);
    }, []);
  }
  while (matrix.length !== 1) {
    let shifty = matrix.shift();
    console.log(shifty);
    result = result.concat(shifty);
    if (matrix.length > 1) {
      matrix = rotateMatrix(matrix, -1);
    }
    if (matrix.length === 1) {
      result = result.concat(matrix[0].reverse());
    }
  }



  return result.length ? result : matrix[0];
};

