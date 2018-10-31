/* global bubbleSort, describe, it, expect, should */

describe('bubbleSort()', function () {
  'use strict';

  it('exists', function () {
    expect(bubbleSort).to.be.a('function');

  });

  it('should sort an array numerically', function () {
    var input = [1, 2, 43, 100, 100, 21, 21];
    var expected = [1, 2, 21, 21, 43, 100, 100];
    bubbleSort(input).should.eql(expected);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
