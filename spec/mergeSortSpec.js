/* global toyproblems, describe, it, expect, should */

describe('mergeSort()', function () {
  'use strict';

  it('exists', function () {
    expect(mergeSort).to.be.a('function');

  });

  it('should return an array with a single number', function () {
    var result = mergeSort([1]);
    result.should.be.eql([1]);
  });

  it('should sort a short array of integers', function () {
    var result = mergeSort([8,7,3,6,9,2,4,5,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9]);
  });

  it('should sort an enormous array of random integers', function() {
    setTimeout(() => { 
      var input = [];
      var sorted;
      var n = 100000;
      for (var i = 0; i < n; i++) {
        var number = Math.floor(Math.random() * n);
        input.push(number);
      }
      var sorted = Array.from(input);
      sorted.sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically
      var result = mergeSort(input);
      // using .eql can cause an n-line error message to print, so we do it by hand
      for (var i = 0; i < n; i++) {
        result[i].should.equal(sorted[i]);
      }
      done();
    }, 0);
  });

  // Add more assertions here
});
