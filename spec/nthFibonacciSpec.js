/* global nthFibonacci, describe, it, expect, should */

describe('nthFibonacci()', function () {
  'use strict';

  it('exists', function () {
    expect(nthFibonacci).to.be.a('function');

  });

  it('should return the nth Fibonacci number for a given n', function () {
    nthFibonacci(5).should.equal(5);
    nthFibonacci(10).should.equal(55);
    nthFibonacci(20).should.equal(6765);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
