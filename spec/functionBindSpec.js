/* global toyproblems, describe, it, expect, should */

describe('bind()', function () {
  'use strict';

  it('exists', function () {
    expect(bind).to.be.a('function');

  });

  it('should return a function', function () {
    var func = function () { };
    var res = bind(func);
    should.exist(res);
    res.should.be.a.Function;
  });

  it('should not return the same function', function () {
    var func = function () { };
    var res = bind(func);
    //aka, the original function should not be returned by `bind()`
    // instead, we want to return a new function that will call our original
    // function with the default (aka, curried) arguments we specified in our
    // original call to `bind`.
    res.should.not.be.equal(func);
  });

  it('should return a result when calling the bounded function', function(){
    var func = function (arg1) { return arg1 };
    var context = null;
    var boundFunc = bind(func, context, "foobar");
    var result = boundFunc();
    // console.log(result);
    
    should.exist(result);
    result.should.be.equal('foobar');
  });

  it('should allow the bound function to be called multiple times with different arguments', function(){
    var func = function (a, b) { return a + b };
    var context = null;
    var boundFunc = bind(func, context, 'wow '); // "bind" 'wow ' => the first argument (a)
    var result1 = boundFunc('dawg'); // first call to boundFunc with b='dawg'
    should.exist(result1);
    result1.should.be.equal('wow dawg');
    var result2 = boundFunc('man'); // second call to boundFunc with b='man'
    should.exist(result2);
    result2.should.be.equal('wow man');
// you're probably modifying some shared `args` array in the
// clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
// is being called.
// hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
// hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
// hint: modify `myArray`
  });

  // Add more assertions here
});
