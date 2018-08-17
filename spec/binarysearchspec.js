/* global binarySearch, describe, it, expect, should */

describe('binarySearch()', function () {
  'use strict';

  it('exists', function () {
    expect(binarySearch).to.be.a('function');

  });

  it('should return 0 for [5] 5', function () {
    var result = binarySearch([5], 5);
    should.equal(result, 0);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5]', function () {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    should.equal(result, 3);
  });
  it('should return 4 for 5 in [1, 2, 3, 4, 5]', function () {
    var result = binarySearch([1, 2, 3, 4, 5], 5);
should.equal(result, 4);
  });
  // Add more assertions here
});
