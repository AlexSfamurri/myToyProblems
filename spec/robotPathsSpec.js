/* global robotPaths, describe, it, expect, should */

describe('robotPaths()', function () {
  'use strict';

  it('exists', function () {
    expect(robotPaths).to.be.a('function');

  });

  it('1x1', function(){
    robotPaths(1).should.equal(1);
  })

  it('2x2', function(){
    robotPaths(2).should.equal(2);
  });

  it('should correctly identify the number of unique paths for a 3x3 grid', function () {
    robotPaths(3).should.equal(12);
  });

  it('4x4', function(){
    robotPaths(4).should.equal(184);
  })

  it('5x5', function(){
    robotPaths(5).should.equal(8512);
  })

  it('6x6 grid', function () {
    robotPaths(6).should.equal(1262816);
  });

  // Add more assertions here
});
