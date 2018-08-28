/* global toyproblems, describe, it, expect, should */

describe('toFraction()', function () {
  'use strict';

  it('exists', function () {
    expect(toFraction).to.be.a('function');

  });

  it('should return a result', function () {
    should.exist(toFraction(0.25));
  });

  it('should return a string', function () {
    toFraction(0.25).should.be.a.String;
  });

  it('should return the correct fraction 1.0', function () {
    toFraction(1.0).should.equal('1/1');
  });

  it('should return the correct faction for 0.25', function () {
    toFraction(0.25).should.equal('1/4');
  });

  it('should return the correct faction for 0.88', function () {
    toFraction(0.88).should.equal('22/25');
  });

  it('should return the correct faction for 253213', function () {
    toFraction(0.253213).should.equal('253213/1000000');
  });

  it('should work for negative numbers', function() {
    toFraction(-1.75).should.equal('-7/4');
  });
  // Add more assertions here
});
