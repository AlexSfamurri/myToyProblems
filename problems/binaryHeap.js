 /*! toyproblems v0.0.0 - MIT license */
'use strict';

/* eslint-disable */
function BinaryHeap() {
  this._heap = [];
  this._compare = function (i, j) { return i < j };
}

BinaryHeap.prototype.insert = function (node) {
  // Your code here
  if(!this._heap.length){
    this._heap.push(node);
  } else if (this._compare(this._heap[0], node)){
    this._heap.push(node)
  } else {
    this._heap.unshift(node);
  }
};

BinaryHeap.prototype.removeRoot = function () {
  // Your code here
  return this._heap.shift();
};

function swapNodesAt(index, parentIndex, binaryHeap) {
  // Your code here
}

function getLesserChildIndex(parentIndex, binaryHeap) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < binaryHeap._heap.length;
  });
  // compare children nodes to get the index of the lesser of them
  if (binaryHeap._compare(binaryHeap._heap[childIndices[0]], binaryHeap._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
}

