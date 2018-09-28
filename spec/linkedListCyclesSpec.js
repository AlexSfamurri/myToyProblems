/* global hasCycle, describe, it, expect, should */
class ListNode{
  constructor(value){
    this.value = value;
    this.next = null;
  }

}


describe('hasCycle()', function () {
  'use strict';

  it('should return a boolean', function () {
    var result = hasCycle(new ListNode('A'));
    result.should.be.a.Boolean;

  });

  it('should return false for a large sized non-cyclical linked list', function () {
    // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> null
    var startNode = new ListNode('start');
    var currentNode = startNode;
    // one. million nodes!! wahahahaha
    for (var i = 0; i < 999999; i++) {
      currentNode.next = new ListNode('tail' + i);
      currentNode = currentNode.next;
    }
    hasCycle(startNode).should.be.false;
  });

  it('should return true for a linked list with only 1 node that points to itself', function () {
    // aka, A -> A -> A -> etc...
    var nodeA = new ListNode('A');
    nodeA.next = nodeA;
    hasCycle(nodeA).should.be.true;
  });

  // Add more assertions here
});
