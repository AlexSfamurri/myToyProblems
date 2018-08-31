/* global LinkedList, describe, it, expect, should */

describe('LinkedList()', function () {
  'use strict';

  it('exists', function () {
    expect(LinkedList).to.be.a('function');

  });

  it('should designate a new tail when new nodes are added', function () {
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);  });

  it('should remove the head from the list when removeHead is called', function () {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it('should remove the head and tail from the list when removeHead is called and there is only one element present', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it('should contain a value that was added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  // Add more assertions here
});
