/* global nestedWordCount, describe, it, expect, should */

describe('nestedWordCount()', function () {
  'use strict';

  it('exists', function () {
    expect(nestedWordCount).to.be.a('function');

  });

  it('does something', function () {
    const wordList = ["gray", "grays", "ray", "rays", "strays"];
    nestedWordCount(wordList).should.equal('grays');
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
