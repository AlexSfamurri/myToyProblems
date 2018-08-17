/* global rockPaperScissors, describe, xit, expect, should */

describe('rockPaperScissors()', function () {
    'use strict';
  
    it('exists', function () {
      expect(rockPaperScissors).to.be.a('function');
  
    });
  
    it('should return an array', function () {
      const input = 3;
      const expected = [["rock","rock","rock"],["rock","rock","paper"],
      ["rock","rock","scissors"],["rock","paper","rock"],
      ["rock","paper","paper"],["rock","paper","scissors"],
      ["rock","scissors","rock"],["rock","scissors","paper"],
      ["rock","scissors","scissors"],["paper","rock","rock"],
      ["paper","rock","paper"],["paper","rock","scissors"],
      ["paper","paper","rock"],["paper","paper","paper"],
      ["paper","paper","scissors"],["paper","scissors","rock"],
      ["paper","scissors","paper"],["paper","scissors","scissors"],
      ["scissors","rock","rock"],["scissors","rock","paper"],
      ["scissors","rock","scissors"],["scissors","paper","rock"],
      ["scissors","paper","paper"],["scissors","paper","scissors"],
      ["scissors","scissors","rock"],["scissors","scissors","paper"],
      ["scissors","scissors","scissors"]];

      const actual = rockPaperScissors(input);
      expect(actual).to.be.an('array');
      
    });
  
    it('should return all possible values for 3 rounds of rock paper scissors', function () {
        const input = 3;
        const expected = [
        ["rock","rock","rock"],
        ["rock","rock","paper"],
        ["rock","rock","scissors"],
        ["rock","paper","rock"],
        ["rock","paper","paper"],
        ["rock","paper","scissors"],
        ["rock","scissors","rock"],
        ["rock","scissors","paper"],
        ["rock","scissors","scissors"],
        ["paper","rock","rock"],
        ["paper","rock","paper"],
        ["paper","rock","scissors"],
        ["paper","paper","rock"],
        ["paper","paper","paper"],
        ["paper","paper","scissors"],
        ["paper","scissors","rock"],
        ["paper","scissors","paper"],
        ["paper","scissors","scissors"],
        ["scissors","rock","rock"],
        ["scissors","rock","paper"],
        ["scissors","rock","scissors"],
        ["scissors","paper","rock"],
        ["scissors","paper","paper"],
        ["scissors","paper","scissors"],
        ["scissors","scissors","rock"],
        ["scissors","scissors","paper"],
        ["scissors","scissors","scissors"]];
  
        const actual = rockPaperScissors(input);
      expect(actual).to.deep.equal(expected);
    });
  
    // Add more assertions here
  });
  