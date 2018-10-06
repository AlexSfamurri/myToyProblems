/* global spiralTraversal, describe, it, expect, should */

describe('spiralTraversal()', function () {
  'use strict';

  it('exists', function () {
    expect(spiralTraversal).to.be.a('function');

  });

  it('should spirally traverse a square matrix', function () {
    const squareMatrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    spiralTraversal(squareMatrix).should.be.eql([1, 2, 3, 4, 5, 
      10, 15, 20, 25, 24, 23, 22, 21, 
      16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });

  it('should spirally traverse an n by 1 matrix', function () {
    var awkwardMatrix = [
      [1, 2, 3, 4, 5, 6, 7]
    ];
    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 4, 5, 6, 7]);
  });
  
  it('should spirally traverse a 1 by n matrix', function(){
    var awkwardMatrix = [
      [1],
      [2],
      [3],
      [4]
    ];
    spiralTraversal(awkwardMatrix).should.be.eql([1, 2, 3, 4]);
  });

  // Add more assertions here
});
