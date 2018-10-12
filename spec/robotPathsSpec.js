/* global robotPaths, describe, it, expect, should */

describe('robotPaths()', function () {
  'use strict';

  it('exists', function () {
    expect(robotPaths).to.be.a('function');

  });

  it('should correctly identify the number of unique paths for a 3x3 grid', function () {
    robotPaths(3).should.equal(12);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
