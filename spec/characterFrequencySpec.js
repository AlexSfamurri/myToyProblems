/* global toyproblems, describe, it, expect, should */

describe('characterFrequency()', function () {
  'use strict';

  it('exists', function () {
    expect(characterFrequency).to.be.a('function');

  });

  it('should sort by descending order in frequency', function () {
    var result = characterFrequency('mississippi');
    result[0][1].should.eql(4);
    result[1][1].should.eql(4);
    result[2][1].should.eql(2);
    result[3][1].should.eql(1);
  });

  it('should sort priorities sorting by frequence over sorting by letter', function () {
    var result;
    // same number of p's and o's, sort ascending by character
    result = characterFrequency('popopo');
    result[0][0].should.equal('o');
    result[1][0].should.eql('p');
    // more p's and than o's, sort by frequency
    result = characterFrequency('popopop');
    result[0][0].should.equal('p');
    result[1][0].should.eql('o');
  });

  // Add more assertions here
});
