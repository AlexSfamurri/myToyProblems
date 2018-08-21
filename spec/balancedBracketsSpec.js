/* global toyproblems, describe, it, expect, should */

describe('balancedParens()', function () {
  'use strict';

  it('exists', function () {
    expect(balancedParens).to.be.a('function');

  });

  it('should return false for ())()(()', function () {
    balancedParens('())()(()').should.be.false;
  });
  it('should return false for [(]{)}', function () {
// debugger;
    
    balancedParens('[(]{)}').should.be.false;
  });

  it('should return true for [[[{{{((()))}}}]]]', function () {
    balancedParens('[[[{{{((()))}}}]]]').should.be.true;
  });

  it('should return false for []}{()', function () {
    balancedParens('[]}{()').should.be.false;
  });

  // Add more assertions here
});

describe('advancedSolution()', function () {
  it('exists', function () {
    expect(advancedSolution).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });
});
