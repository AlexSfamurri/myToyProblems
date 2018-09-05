/* global Tree, describe, it, expect, should */

describe('Tree()', function () {
  'use strict';

  it('exists', function () {
    expect(Tree).to.be.a('function');

  });

  it('Should return a number', function () {
    var root = new Tree('root');
    root.countLeaves().should.be.a.Number;
  });

  it('does something else', function () {
    // make a one-node tree
    var root = new Tree();
    // an empty root node is technically a leaf
    root.countLeaves().should.equal(1);
  });

  // Add more assertions here
});
