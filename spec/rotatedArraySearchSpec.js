/* global toyproblems, describe, it, expect, should */

describe('rotatedArraySearch()', function () {
  'use strict';

  it('exists', function () {
    expect(toyproblems).to.be.a('function');

  });

  it('should return a number when called with a value that is in the array', function () {
    (typeof rotatedArraySearch([3, 4, 5, 2], 4)).should.be.equal("number");
  });

  it('should return the index of that item when called with a value that is in the array', function () {
    rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1).should.equal(4);
  });

  it('should return the index of that item quickly', function(){
    var start = 0, end = 1000000, step = 1, offset = 247858, value = 349744;
    var alot = range(start, end, step);
    var real = value - offset; // This logic is not applicable to all cases, just a subset.
    rotatedArraySearch(rotate(alot, offset), value).should.equal(real);
  });

  it('should return -1 if value is not in array', function() {
    Array.prototype.indexOf = indexOf;
    Array.prototype.includes = includes;
    assert.equal(rotatedArraySearch([1, 2, 3], 5), -1);
  })

  // Add more assertions here
});
