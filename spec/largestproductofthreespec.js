/* global toyproblems, describe, it, expect, should */

describe('largestProductOfThree()', function () {
  'use strict';

  it('exists', function () {
    expect(largestProductOfThree).to.be.a('function');

  });

  it('Should return the largest 3 valus product', function () {
    const input = [2, 1, 3, 7];
    expect(largestProductOfThree(input)).to.equal(42);
  });

  it('Should handle 3 positive numbers with repeating', function () {
    const input = [7,5,7];
    expect(largestProductOfThree(input)).to.deep.equal(245);
  });
  
  it('should handle negative numbers', function(){
    expect(largestProductOfThree([2, 3, -11, 7, 5, -13])).to.deep.equal(1001);
    expect(largestProductOfThree([-31, 41, 34, -37, -17, 29])).to.deep.equal(47027);
  })
  // Add more assertions here
});
