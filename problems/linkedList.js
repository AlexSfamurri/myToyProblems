 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const LinkedList = function(){
  //fill me in!
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  //fill me in
  const node = this.makeNode(value);

  if (this.head === null) {
    this.head = node;
  }

  if (this.tail === null) {
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  //fill me in
  const newHead = this.head.next;  
  this.head = newHead;
  if (this.head === null) {
    this.tail = null;
  }
};

LinkedList.prototype.contains = function(target){
  //fill me in
  let currentNode = this.head;

  while(currentNode !== null) {
    if (currentNode.value === target) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value){
  //fill me in
  const node = {
    value: value,
    next: null,
  };

  return node;
};
