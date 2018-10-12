/* global BinaryHeap, describe, it, expect, should */

describe('BinaryHeap()', function () {
  'use strict';

  it('exists', function () {
    expect(BinaryHeap).to.be.a('function');

  });

  it('should add a value to an empty BinaryHeap instance', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap._heap.length.should.equal(1);
    binaryHeap._heap[0].should.equal(4);
  });

  it('should maintain sorting based on BinaryHeap._compare between a parent node and its children', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;
    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true;
    compare(heap[0], heap[2]).should.be.true;
    compare(heap[1], heap[3]).should.be.true;
    compare(heap[1], heap[4]).should.be.true;
  });

  it('should return the root node in BinaryHeap._heap', function(){
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(8);
    var actualRoot = binaryHeap._heap[0];
    var removedRoot = binaryHeap.removeRoot();
    should.equal(actualRoot, removedRoot);
    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);
    actualRoot = binaryHeap._heap[0];
    removedRoot = binaryHeap.removeRoot();
    should.equal(actualRoot, removedRoot);
  });

  // Add more assertions here
});
