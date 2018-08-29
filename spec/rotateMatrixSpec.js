/* global toyproblems, describe, it, expect, should */

describe('rotateMatrix()', function () {
  'use strict';

  it('exists', function () {
    expect(rotateMatrix).to.be.a('function');

  });

  it('Should return an array', function () {
    var result = rotateMatrix([]);
    should.exist(result);
    result.should.be.an.Array;
  });

  it('should not alter a 0x0 matrix', function () {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };
    var input = [];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,0,0);
    result.should.be.eql([]);
  });
  
  it('should not alter a 1x1 matrix', function() {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };
    var input = [[1]];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,1,1);
    result.should.be.eql([[1]]);
  });

  it('Should rotate a 2x2 matrix', function() {
    // Verify the size of a matrix
    var shouldBeMbyN = function (matrix,m,n) {
      matrix.should.have.length(m);
      for (var i = 0; i < n; i++) {
        matrix[i].should.have.length(n);
      }
    };
    var input = [
      [1,2],
      [3,4]
    ];
    var result = rotateMatrix(input);
    shouldBeMbyN(result,2,2);
    result.should.be.eql([
      [3,1],
      [4,2]
    ]);
  })
  // Add more assertions here
});
