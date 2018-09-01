/* global toyproblems, describe, it, expect, should */

describe('cipher()', function () {
  'use strict';
  const input = {
    alphabet: "abcde",
    offset: 0,
    message: '',
    command: 'encode'
  };
  it('exists', function () {
    expect(cipher).to.be.a('function');

  });

  it('should encode "bbc" in to "ccd", with offset: 1 and alphabet: "abcde"', function () {
    const options = {
      alphabet: "abcde",
      offset: 1,
      message: "bbc",
      command: "encode",
    };
    expect(cipher(options)).to.equal("ccd");
  });

  it('should encode "bbc" in to "dde", with offset: 2 and alphabet: "abcde"', function () {
    const options = {
      alphabet: "abcde",
      offset: 2,
      message: "bbc",
      command: "encode",
    };
    expect(cipher(options)).to.equal('dde');
  });

  it('should encode "bbc" in to "aab", with offset: 4 and alphabet: "abcde"', function() {
    const options = {
      alphabet: "abcde",
      offset: 4,
      message: "bbc",
      command: "encode",
    };
    // debugger;
    expect(cipher(options)).to.equal('aab');
  })

  // Add more assertions here
});
