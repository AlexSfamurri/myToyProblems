/* global toyproblems, describe, it, expect, should */

describe('Range()', function () {
  'use strict';

  it('exists', function () {
    expect(toyproblems).to.be.a('function');

  });

  it('should have `size()` method that returns number of elements', function () {
    var justOne = new Range(1);
    should.exist(justOne.size);
    justOne.size().should.eql(1);
    
    var oneToTen = new Range(1, 10);
    oneToTen.size().should.eql(10);
    var evenDigits = new Range(2, 8, 2);
    evenDigits.size().should.eql(4);
    var threes = new Range(3, 100, 3);
    threes.size().should.eql(33);
  });

  it('should be able to count backwards', function () {
    var countdown = new Range(10, 0, -1);
    var elements = [];
    countdown.each(function(val){
      elements.push(val);
    });
    elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('should be able to count backwards implicitly', function() {
    var countdown = new Range(10, 0);
    var elements = [];
    countdown.each(function(val){
      elements.push(val);
    });
    elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('should be able to count down by 2', function() {
    var countdown = new Range(10, 0, -2); // Let's count down by twos
    var elements = [];
    countdown.each(function(val){elements.push(val);});
    elements.should.eql([10, 8, 6, 4, 2, 0]);
  });

  it('should iterate with a callback', function() {
    var justOne = new Range(1);
    should.exist(justOne.each);
    var evenDigits = new Range(2, 8, 2);
    var elements = [];
    evenDigits.each(function(val){
      elements.push(val);
    });
    elements.should.eql([2, 4, 6, 8]);
    // Let's try this problem, summing up the numbers from 1 to 100:
    // http://mathcentral.uregina.ca/QQ/database/QQ.02.06/jo1.html
    var oneToOneHundred = new Range(1, 100);
    var sum = 0;
    oneToOneHundred.each(function(val){
      sum += val;
    });
    sum.should.eql(5050);
  });

  it('should tell us if a number is in the series', function() {
    var justOne = new Range(1);
    justOne.includes(1).should.eql(true);
    justOne.includes(50).should.eql(false);
    var threes = new Range(3, 100, 3);
    threes.includes(3).should.eql(true);
    threes.includes(4).should.eql(false);
    // debugger;
    threes.includes(33).should.eql(true);
    threes.includes(99).should.eql(true);
  });
  // Add more assertions here
});


