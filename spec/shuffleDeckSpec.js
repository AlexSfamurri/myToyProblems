/* global toyproblems, describe, it, expect, should */

describe('shuffleDeck()', function () {
  'use strict';

  it('exists', function () {
    expect(shuffleDeck).to.be.a('function');

  });

  it('Should return an array', function () {
    var result = shuffleDeck(orderedDeck());
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with every card in the deck', function () {
    var input = orderedDeck();
    var control = orderedDeck();
    var result = shuffleDeck(input);
    // check that every expected card is in the result deck
    for (var i = 0; i < control.length; i++) {
      result.should.contain(control[i]);
    }
    // check that no unexpected cards are in the result deck
    for (var i = 0; i < result.length; i++) {
      control.should.contain(result[i]);
    }
  });

  it('EXTRA CREDIT: for large N, should not have any bias from a uniform distribution', function() {
    // We perform this test on an array of 1000 integers.
    // (Your function must shuffle an arbitrary array to pass this test.)
    // If your algorithm times out here, it is not running in linear time.
    var orderedArray = function () {
    var output = [];
      for (var i = 0; i < 1000; i++) {
        output.push(i);
      }
      return output;
      };
      var deck = orderedArray();
      // Keep a table of how often each integer appears in each array position...
      var cardPositionCounts = {};
      for (var i = 0; i < deck.length; i++) {
        var cardPosition = cardPositionCounts[deck[i]] = {};
        for (var j = 0; j < deck.length; j++) {
          cardPosition[j] = 0;
        }
      }
      // ...over the course of five thousand shuffles
      var iterations = 1000 * 5;
      for (var i = 0; i < iterations; i++) {
        deck = orderedArray();
        var randomDeck = shuffleDeck(deck);
        for (var j = 0; j < randomDeck.length; j++) {
          cardPositionCounts[randomDeck[j]][j] += 1;
        }
      }
      // The result should not betray any obvious statistical bias.
      deck = orderedArray();
      // The expected number of occurrences for a particular card in a particular index is
      // iterations/1000 = 1
      var expected = 5,
        chi2 = 0;
      for (var i = 0; i < deck.length; i++) {
        var cardPosition = cardPositionCounts[deck[i]];
        for (var j = 0; j < deck.length; j++) {
          // calculate chi-squared test
          chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
        }
      }
      // quick and dirty statistical test:
      // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2
      // chi2.should.be.approximately(1000*1000, 1000*10);
    });

  // Add more assertions here
});
