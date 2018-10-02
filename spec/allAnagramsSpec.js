/* global allAnagrams, describe, it, expect, should */

describe('allAnagrams()', function () {
  'use strict';

  it('exists', function () {
    expect(allAnagrams).to.be.a('function');

  });

  it('should return an array of anagrams that contains `lives` for input `elvis`', function () {
    var result = allAnagrams('elvis');
    var found = result.indexOf('lives') !== -1;
    found.should.be.true;
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
