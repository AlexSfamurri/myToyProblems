/* global sumArray, describe, it, expect, should */

describe('sumArray()', function () {
  'use strict';

  it('exists', function () {
    expect(sumArray).to.be.a('function');

  });

  it('does something', function () {
    expect(sumArray([10, -11, 11])).to.equal(11);
  });

  it('does something else', function () {
    expect(sumArray([1, 2, 3, -4, 5, -4, 5, -4])).to.equal(8);
  });
  it('-1', function () {
    expect(sumArray([-3, -2, -1, -2, -3])).to.equal(-1);
  });

  // Add more assertions here
});
