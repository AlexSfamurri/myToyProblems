/* global toyproblems, describe, it, expect, should */

describe('zeroSum()', function () {
  'use strict';

  it('exists', function () {
    expect(zeroSum).to.be.a('function');

  });

  it('Should return a boolean', function () {
    zeroSum([]).should.be.a.Boolean;
  });

  it('Should return true', function () {
    const input = [1, 3, 2, -3];
    const output = true;
    zeroSum(input).should.equal(output);
  });

  // Add more assertions here
});
