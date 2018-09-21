/* global toyproblems, describe, it, expect, should */

describe('evenOccurrence()', function () {
  'use strict';

  it('exists', function () {
    
    expect(evenOccurrence).to.be.a('function');

  });

  it('Find the first even occurance', function () {
    var array = ['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow'];
    evenOccurrence(array).should.equal('doublerainbow');
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
