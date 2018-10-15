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

Tree.prototype.getClosestCommonAncestor = function (node1, node2) {
  // TODO: implement me!
  let result;
  if (node1 === node2) {
    return node1;
  }

  let path1 = this.getAncestorPath(node1);
  let path2 = this.getAncestorPath(node2);
  if (path1 === null || path2 === null) { return null; }

  const minLength = Math.min(path1.length, path2.length);

  for (var i = 0; i < minLength; i++) {
    if (path1[i] !== path2[i]) {
      return path1[i - 1];
    }
  }
  return path1[i];

};

Tree.prototype.getAncestorPath = function (node) {
  // TODO: implement me!
  function recurse(parent, target, path) {
    if (parent === target) { return path; }
    if (!parent.children) { return null; }

    const childResults = parent.children.map(child => recurse(child, target, path.concat(child)));

    const results = childResults.filter(result => result);
    if (results.length) {
      return results[0];
    }
    return null;
  }

  return recurse(this, node, [this]);

};
