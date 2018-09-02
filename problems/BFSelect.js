 /*! toyproblems v0.0.0 - MIT license */
'use strict';


/*
 * Basic tree that stores a value.
 */

const Tree = function(value){
  this.value = value;
  this.children = [];
};

var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

Tree.prototype.BFSelect = function (filter) {
  // return an array of values for which the function filter(value, depth) returns true
  const queue = new Queue();
  const node = this;
  node.depth = 0;
  const result = [];
  queue.enqueue(node);

  let queueSize = 1;
  while (queueSize > 0) {
    var popNode = queue.dequeue();
    queueSize--;
    if (filter(popNode.value, null) || filter(null, popNode.depth)) {
      result.push(popNode.value);
    }
    for (let i = 0; i < popNode.children.length; i++) {
      popNode.children[i].depth = popNode.depth + 1;
      queue.enqueue(popNode.children[i]);
      queueSize++;
    }
  }
  return result;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index, 1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
