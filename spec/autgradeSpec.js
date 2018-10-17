/* global autograde, describe, it, expect, should */

describe('autograde()', function () {
  'use strict';

  it('exists', function () {
    expect(autograde).to.be.a('function');

  });

  it('should return the correct average grades', function () {
    const input = 'Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18';
    const output = { all: 15.93, Jon: 15.8, Jeremy: 13.4, Jesse: 18.6 };
    const actual = autograde(input);
    console.log(actual);
    console.log(output);
    actual.should.eql(output);
  });

  it('should return the correct average grades', function () {
    const input = 'Abigail 11 3 5 20 4 2 8 17 4 5\nAlexander 2 12 20 0 6 10 3 4 9 7\nAva 11 15 2 19 14 5 16 18 15 19\nEthan 6 12 0 0 5 11 0 11 12 15\nIsabella 16 0 10 7 20 20 7 2 0 1\nJacob 2 14 17 7 1 11 16 14 14 7\nJayden 10 10 3 16 15 16 8 17 15 3\nMadison 10 11 19 4 12 15 7 4 18 13\nSophia 5 17 14 7 1 17 18 8 1 2\nWilliam 12 12 19 9 4 3 0 4 13 14';
    const output = { all: 9.5, Abigail: 7.9, Alexander: 7.3, Ava: 13.4, Ethan: 7.2, Isabella: 8.3, Jacob: 10.3, Jayden: 11.3, Madison: 11.3, Sophia: 9, William: 9 };
    const actual = autograde(input);
    actual.should.eql(output);
  });

  // Add more assertions here
});
