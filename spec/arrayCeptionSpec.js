/* global arrayception, describe, it, expect, should */

describe('arrayception()', function () {
  'use strict';

  it('exists', function () {
    expect(arrayception).to.be.a('function');

  });

  it('should find non-Array value in nested Array depth of 2', function () {
    expect(arrayception([[5], [[]]])).to.equal(2);
  });

  it('should find non-Array value in nested Array depth of 0', function () {
    expect(arrayception([])).to.equal(0);
  });

  it('should find non-Array value in nested Array depth of 0', function(){
    expect(arrayception([[[]]])).to.equal(0);
  });

  it('should find non-Array value in nested Array depth of 3', function(){
    expect(arrayception([[], [[], [], [0, [[]]], []], []])).to.equal(3);
  });

  it('should find non-Array value in nested Array depth of 1', function(){
    expect(arrayception([10, 20, [[], []], 30, 40])).to.equal(1);
  });

  it('should find non-Array value in nested Array depth of 4', function() {
    expect(arrayception([[10, 20], [[30, [40]]]])).to.equal(4);
  })
  // Add more assertions here
});
