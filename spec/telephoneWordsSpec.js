/* global toyproblems, describe, it, expect, should */

describe('telephoneWords()', function () {
  'use strict';

  it('exists', function () {
    expect(telephoneWords).to.be.a('function');

  });

  it('Should return an array', function () {
    var result = telephoneWords('1234');
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return one permutation for 0001', function () {
    telephoneWords('0001').should.have.length(1);
    telephoneWords('0001').should.include('0001');
  });

  // Add more assertions here
});
