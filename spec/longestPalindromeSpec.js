/* global longestPalindrome, describe, it, expect, should */

describe('longestPalindrome()', function () {
  'use strict';

  it('exists', function () {
    expect(longestPalindrome).to.be.a('function');

  });

  it('should return a racecar a', function () {
    longestPalindrome('My dad is a racecar athlete').should.equal('a racecar a');
  });

  it('should return the longest palindrome among several in a string', function () {
    longestPalindrome('aaaa level eye redivider hannah').should.equal(' redivider ');
  });

  it('should return the longest palindrome even if it has an even length', function(){
    longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg').should.equal(' tattarrattat ');
  });
  // Add more assertions here
});
