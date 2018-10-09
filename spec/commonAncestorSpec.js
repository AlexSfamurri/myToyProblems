/* global Tree, describe, it, expect, should */

describe('Tree()', function () {
  'use strict';

  it('exists', function () {
    expect(Tree).to.be.a('function');

  });

  it('addChild should exist', function () {
    var tree = new Tree();
    should.exist(tree.addChild);
  });

  it('should add a child node', function(){
    var tree = new Tree();
    var child = new Tree();
    tree.addChild(child);
    tree.children.should.include(child);
  });

  it('isDescendant should exist', function () {
    var tree = new Tree();
    should.exist(tree.isDescendant);
  });

  it('should check for child nodes', function(){
    var tree = new Tree();
    var child = new Tree();
    tree.isDescendant(child).should.be.false;
    tree.addChild(child);
    tree.isDescendant(child).should.be.true;

  });

  it('removeChild should exist', function(){
    var tree = new Tree();
    should.exist(tree.removeChild);
  });

  it('should remove children', function(){
    var tree = new Tree();
    var child = new Tree();
    tree.addChild(child);
    tree.removeChild(child);
    tree.children.should.not.include(child);
  });

  it('should return the path if child is immediate child', function(){
    // make sure your ancestor path is returning them eldest to youngest
    // ie., [mom, me] _not_ [me, mom]
    var mom = new Tree();
    var me = new Tree();
    mom.addChild(me);
    var path = mom.getAncestorPath(me);
    should.exist(path[0]);
    path[0].should.be.equal(mom);
    should.exist(path[1]);
    path[1].should.be.equal(me);
  });

  it('should return the path to a child node', function(){
    var grandma = new Tree();
    var mom = new Tree();
    var auntElaine = new Tree();
    var me = new Tree();
    grandma.addChild(mom);
    grandma.addChild(auntElaine);
    mom.addChild(me);
    var path = grandma.getAncestorPath(me);
    should.exist(path[0]);
    path[0].should.be.equal(grandma);
    should.exist(path[1]);
    path[1].should.be.equal(mom);
    should.exist(path[2]);
    path[2].should.be.equal(me);
  });

  it('should fail to return the a path if the child is not an anester', function(){
    var parent = new Tree();
    var myChild = new Tree();
    var anotherChild = new Tree();
    parent.addChild(myChild);
    var path = parent.getAncestorPath(anotherChild);
    should.not.exist(path);
  });

  it('should return the root tree when compared to the root tree', function(){
    var trunk = new Tree();
    var commonAncestor = trunk.getClosestCommonAncestor(trunk, trunk);
    should.exist(commonAncestor);
    commonAncestor.should.equal(trunk);
  });

  it('should return lowest common ancestors', function(){
    var root = new Tree();
    var left = new Tree();
    root.addChild(left);
    var right1 = new Tree();
    root.addChild(right1);
    var right2 = new Tree();
    right1.addChild(right2);
    var right3 = new Tree();
    right1.addChild(right3);
    // console.log(root);
    
    var closestAncestor = root.getClosestCommonAncestor(right2, right3);
    should.exist(closestAncestor);
    closestAncestor.should.be.equal(right1);
    var right4 = new Tree();
    right3.addChild(right4);
    var closestAncestor = root.getClosestCommonAncestor(right2, right4);
    should.exist(closestAncestor);
    closestAncestor.should.be.equal(right1);
    var closestAncestor = root.getClosestCommonAncestor(left, right4);
    should.exist(closestAncestor);
    closestAncestor.should.be.equal(root);
  });
  // Add more assertions here
});
