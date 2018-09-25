/* global toyproblems, describe, it, expect, should */

describe('Number.toEnglish()', function () {
  'use strict';

  it('exists', function () {
    expect(Number.prototype.toEnglish).to.be.a('function');

  });

  it('Single digit conversion', function () {
    (0).toEnglish().should.equal('zero');
    (1).toEnglish().should.equal('one');
    (2).toEnglish().should.equal('two');
    (3).toEnglish().should.equal('three');
    (4).toEnglish().should.equal('four');
    (5).toEnglish().should.equal('five');
    (6).toEnglish().should.equal('six');
    (7).toEnglish().should.equal('seven');
    (8).toEnglish().should.equal('eight');
    (9).toEnglish().should.equal('nine');
  });

  it('should write teens', function () {
    (11).toEnglish().should.equal('eleven');
    (12).toEnglish().should.equal('twelve');
    (13).toEnglish().should.equal('thirteen');
    (14).toEnglish().should.equal('fourteen');
    (15).toEnglish().should.equal('fifteen');
    (16).toEnglish().should.equal('sixteen');
    (17).toEnglish().should.equal('seventeen');
    (18).toEnglish().should.equal('eighteen');
    (19).toEnglish().should.equal('nineteen');
  });

  it('should write tens', function() {
    (10).toEnglish().should.equal('ten');
    (20).toEnglish().should.equal('twenty');
    (30).toEnglish().should.equal('thirty');
    (40).toEnglish().should.equal('forty');
    (50).toEnglish().should.equal('fifty');
    (60).toEnglish().should.equal('sixty');
    (70).toEnglish().should.equal('seventy');
    (80).toEnglish().should.equal('eighty');
    (90).toEnglish().should.equal('ninety');
    // compounds from 21-99 should be hyphenated
    (44).toEnglish().should.equal('forty-four');
    (67).toEnglish().should.equal('sixty-seven');
    (99).toEnglish().should.equal('ninety-nine');
  });

  it('should write hundreds', function() {
    (100).toEnglish().should.equal('one hundred');
    (500).toEnglish().should.equal('five hundred');
    (700).toEnglish().should.equal('seven hundred');
    (100).toEnglish().should.equal('one hundred');
    (500).toEnglish().should.equal('five hundred');
    (700).toEnglish().should.equal('seven hundred');
    (275).toEnglish().should.equal('two hundred seventy-five');
    (630).toEnglish().should.equal('six hundred thirty');
    (922).toEnglish().should.equal('nine hundred twenty-two');
  });

  // Add more assertions here
});
