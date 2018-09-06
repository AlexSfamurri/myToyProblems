/* global toyproblems, describe, it, expect, should */

describe('primeTester()', function () {
  'use strict';

  it('exists', function () {
    expect(primeTester).to.be.a('function');

  });

  it('Should return true for 15485867', function () {
    primeTester(15485867).should.be.true;
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
