/* global toyproblems, describe, it, expect, should */

describe('Tree()', function () {
  'use strict';
  var root1 = new Tree(1);
  var branch2 = root1.addChild(2);
  var branch3 = root1.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7);
  // console.log(root1);
  it('exists', function () {
    expect(Tree).to.be.a('function');
    expect(Queue).to.be.a('function');

  });

  it('should return an array', function () {
    
    expect(root1.BFSelect(function (value, depth) {
      return value % 2;
    })).to.be.an('array');
  });

  it('should return a flat array that is the values of the nodes that pas a filter function', function () {
    expect(root1.BFSelect(function (value, depth) {
      return value % 2;
    })).to.deep.equal([1, 3, 5, 7]);
  });

  it('should use filter', function() {
    // this filter function should return all true nodes
    var trueFilter = function (value, depth) {
      return value === true;
    };
    // this filter function should return all false nodes
    var falseFilter = function (value, depth) {
      return value === false;
    };
    // keep a list of true and false nodes to compare
    var trueNodes = [], falseNodes = [], result = null;
    // depth: 0
    var root = new Tree(false);
    falseNodes.push(false);
    // depth: 1
    trueNodes.push(true);   root.addChild(true);
    falseNodes.push(false); root.addChild(false);
    // depth: 2
    trueNodes.push(true);   root.children[0].addChild(true);
    trueNodes.push(true);   root.children[1].addChild(true);
    falseNodes.push(false); root.children[0].addChild(false);
    falseNodes.push(false); root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true);   root.children[0].children[0].addChild(true);
    trueNodes.push(true);   root.children[1].children[0].addChild(true);
    falseNodes.push(false); root.children[0].children[1].addChild(false);
    falseNodes.push(false); root.children[1].children[1].addChild(false);
  });
  
  it('should return all values in the tree if filter only returns true', function() {
   // this filter function should always return all of the nodes
    var all = function () { return true; };
    var equal
    // keep a list of all nodes to compare
    // depth: 0
    var root = new Tree(1);
    var expected = [1];
    // depth: 1
    expected.push(2); root.addChild(2);
    expected.push(3); root.addChild(3);
    // depth: 2
    expected.push(4); root.children[0].addChild(4);
    expected.push(5); root.children[0].addChild(5);
    expected.push(6); root.children[1].addChild(6);
    expected.push(7); root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8); root.children[0].children[0].addChild(8);
    expected.push(9); root.children[1].children[1].addChild(9);
    // we should expect back all the nodes we added
    var result = root.BFSelect(all);
    result.should.have.length(expected.length);
    // make sure the result array contains all the expected values
    for(var i = 0; i < expected.length; i++){
      // ie., `expected[i]` should be somewhere in `result`
      result.should.contain(expected[i]);
    }
  });

  it('should allow filtering by depth', function() {
    // keep a list of nodes by depth to compare
    var nodeDepths = [], deepNodes = [];
    var root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    deepNodes = [];
    deepNodes.push(1); root.addChild(1);
    deepNodes.push(2); root.addChild(2);
    nodeDepths.push(deepNodes);
    // depth: 2
    deepNodes = [];
    deepNodes.push(3); root.children[0].addChild(3);
    deepNodes.push(4); root.children[0].addChild(4);
    deepNodes.push(5); root.children[1].addChild(5);
    deepNodes.push(6); root.children[1].addChild(6);
    nodeDepths.push(deepNodes);
    // depth: 3 (sparse)
    deepNodes = [];
    deepNodes.push(3); root.children[0].children[0].addChild(3);
    deepNodes.push(4); root.children[0].children[0].addChild(4);
    deepNodes.push(5); root.children[1].children[0].addChild(5);
    deepNodes.push(6); root.children[1].children[0].addChild(6);
    nodeDepths.push(deepNodes);
    // helper functions for the tests
    // this filter constructor produces a filter for the specified depth
    var depthFilter = function (filterDepth) {
      return function (node, nodeDepth) {
        return filterDepth === nodeDepth;
      };
    };
    // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal
    var shouldBeDeepEqualSorted = function(array1, array2){
      array1.sort(function(a, b){ return a - b});
      array2.sort(function(a, b){ return a - b});
      array1.should.eql(array2); // deep equality
    };
    // the actual tests
    // console.log(nodeDepths[1]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);
  });

  // Add more assertions here
});
