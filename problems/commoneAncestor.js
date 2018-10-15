'use strict';

/* eslint-disable no-extend-native */
var Tree = function(){
  this.children = [];
};

Tree.prototype.addChild = function(node){
  this.children.push(node);
};

Tree.prototype.isDescendant = function(node){
  return this.children.includes(node);
};

Tree.prototype.removeChild = function(node){
  const index = this.children.indexOf(node);
  this.children.splice(index, 1);
};

Tree.prototype.getClosestCommonAncestor = function(relative1, relative2) {
  // TODO: implement me!
  const relative1Path = this.getAncestorPath(relative1);
  const relative2Path = this.getAncestorPath(relative2);
  console.log(relative1Path, " relative1");
  console.log(relative2Path, " relative2");
  if (relative1Path === null || relative2Path === null) { return null; ev}
  if (relative1Path.length === 1 && relative2Path.length === 1){
    return relative1;
  }

  if(relative1Path.length === relative2Path.length){
    return relative1Path[relative1Path.length - 1];
  }
  
  

};


Tree.prototype.getAncestorPath = function(node, result = []) {
  // TODO: implement me!
  result.push(this);
  if(this.children.includes(node) && this.children.length){
    result.push(node);
  } else {
    this.children.forEach(child => {
      child.getAncestorPath(node, result);
    });
  }
  return result.includes(node) ? result : null;
};
