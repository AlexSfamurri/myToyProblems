/* global translateRomanNumeral, describe, it, expect, should */

describe('translateRomanNumeral()', function () {
  'use strict';

  it('exists', function () {
    expect(translateRomanNumeral).to.be.a('function');

  });

  it('should translate I', function () {
    translateRomanNumeral('I').should.eql(1);
  });

  it('should translate multiple digits being added', function () {
    translateRomanNumeral("II").should.eql(2);
    translateRomanNumeral("VI").should.eql(6);
    translateRomanNumeral("VII").should.eql(7);
    translateRomanNumeral("XV").should.eql(15);
  });

  it('should translate subtractive notation', function() {
    translateRomanNumeral("IV").should.eql(4);
    translateRomanNumeral("XIV").should.eql(14);
    translateRomanNumeral("MCM").should.eql(1900);
  });

  it('should translate complex examples (e.g. years used in Wikipedia page on roman numerals)', function() {
    translateRomanNumeral("MCMLIV").should.eql(1954);
    translateRomanNumeral("MCMXC").should.eql(1990);
    translateRomanNumeral("MMVIII").should.eql(2008);
    translateRomanNumeral("MDCCCCX").should.eql(1910);
    translateRomanNumeral("MCMX").should.eql(1910);
  });

  it('should return null if passed something other than a string', function() {
    should.equal(translateRomanNumeral(50), null);
  });

  it('should return 0 if passed an empty string', function() {
    translateRomanNumeral("").should.eql(0);
  });
  // Add more assertions here
});
