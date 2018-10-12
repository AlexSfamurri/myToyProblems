/* global arrayception, describe, it, expect, should */

describe('arrayception()', function () {
  'use strict';

  it('exists', function () {
    expect(arrayception).to.be.a('function');

  });

  it('should find non-Array value in nested Array depth of 2', function () {
    expect(arrayception([[5], [[]]])).to.equal(2);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
