/*! toyproblems v0.0.0 - MIT license */
'use strict';
/**
  * Stack Class
  */
const Stack = function (){
  // TODO: Implement me!
  this.storage = {};
  this.total = 0;
};

Stack.prototype.push = function (value){
  this.total += 1;
  this.storage[this.total] = value;
};

Stack.prototype.pop = function (){
  if (this.total !== 0) {
    const pancake = this.storage[this.total];
    delete this.storage[this.total];
    this.total -= 1;
    return pancake;
  } else {
    return null;
  }
};

Stack.prototype.size = function (){
  return this.total;
};
/**
  * Queue Class
  */
const Queue = function (){
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (value){
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function (){
    // TODO: implement `dequeue`
    while (inbox.size()) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function (){
    // TODO: implement `size`
    return outbox.size() || inbox.size();
  };
};