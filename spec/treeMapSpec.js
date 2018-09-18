/* global toyproblems, describe, it, expect, should */

describe('Tree()', function () {
  'use strict';

  it('exists', function () {
    expect(Tree).to.be.a('function');

  });

  it('If the callback doesn\'t alter the values should return an identical tree', function () {
    // this "identity" function returns the same value that was passed in
    var identity = function (value) { return value; };
    // create a tree with some values
    // depth: 0
    var input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    // depth: 3 (sparse)
    input.children[0].children[0].addChild(9);
    input.children[1].children[1].addChild(10);
    var verifyTree = function (result, expectation) {
      result.should.be.an.instanceOf(Tree);  // we expect a tree node
      result.value.should.equal(expectation.value); // with the same value
      result.should.not.equal(expectation); // but NOT the same node
      result.children.should.have.length(expectation.children.length); // with the same number of children
      for (var i = 0; i < result.children.length; i++) {
        verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
      }
    }
    var result = input.map(identity);
    console.log(result, " this is result");
    console.log(input, " this is input");
    
    
    // the input and output trees should have identical values
    verifyTree(result, input);
  });

  it('should update the tree with doubled values if the function doubles the value', function () {
    // this function doubles the value that was passed in
    var double = function (value) { return value * 2; };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    var input = new Tree(1);
    var output = new Tree(2);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // expected values
    output.addChild(4);
    output.addChild(6);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    // expected values
    output.children[0].addChild(8);
    output.children[0].addChild(10);
    output.children[1].addChild(12);
    output.children[1].addChild(16);
    // depth: 3 (sparse)
    input.children[0].children[0].addChild(9);
    input.children[1].children[1].addChild(10);
    // expected values
    output.children[0].children[0].addChild(18);
    output.children[1].children[1].addChild(20);
    var verifyTree = function (result, expectation) {
      result.should.be.an.instanceOf(Tree);  // we expect a tree node
      result.value.should.equal(expectation.value); // with the same value
      result.children.should.have.length(expectation.children.length); // with the same number of children
      for (var i = 0; i < result.children.length; i++) {
        verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
      }
    }
    input.mapInPlace(double);
    verifyTree(input, output);
  });

  // Add more assertions here
});
