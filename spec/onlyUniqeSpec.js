/* global onlyUnique, describe, it, expect, should */

describe('onlyUnique()', function () {
  'use strict';

  it('exists', function () {
    expect(onlyUnique).to.be.a('function');

  });

  it('should return o tr for the String: hello there', function () {
    onlyUnique('hello there').should.equal('o tr');
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
