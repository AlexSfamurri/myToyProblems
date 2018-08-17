/* global toyproblems, describe, it, expect, should */

describe('compose()', function () {
  'use strict';

  it('exists', function () {
    expect(compose).to.be.a('function');

  });

  it('compose should return a function', function () {
    var result = compose(function(){return 'Hi!';});
    should.exist(result);
    result.should.be.a.Function;
  });

  it('should be able to compose two functions', function () {
    var greet = function(name){return 'hi: ' + name;};
    var exclaim = function(statement){return statement.toUpperCase() + '!'};
    var welcome = compose(greet, exclaim);
    welcome.should.be.a.Function;
    welcome('phillip').should.equal('hi: PHILLIP!');
    welcome('kia').should.equal('hi: KIA!');
  });
  
  it('should be able to compose multiple funcitions', function(){
    var first = function(array){return array[0];};
    var shift = function(array){return array.slice(1);};
    var fifth = compose(first, shift, shift,shift, shift);
    fifth.should.be.a.Function;
    (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
  })

  it('should be able to handle multiple composes', function(){
    var first = function(array){return array[0];};
    var shift = function(array){return array.slice(1);};
    var fifth = compose(first, shift, shift, compose(shift, shift));
    fifth.should.be.a.Function;
    (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
  })
  // Add more assertions here
});

describe('pipe()', function(){
  it('should exsist', function(){
    expect(pipe).to.be.a('function');
  });

  it('should return a function', function(){
    function add2(value){return value + 2;}
    function multiplyBy3(number){return number * 3;}
    (pipe(add2, multiplyBy3)).should.be.a.Function;
  });

  it('should pass input through a function', function(){
    function add2(value){return value + 2;}
    (pipe(add2)(21)).should.equal(23); 
  });

  it('should pass input through two funcitons', function(){
    function add2(value){return value + 2;}
    function multiplyBy3(number){return number * 3;}
    (pipe(add2, multiplyBy3)(5).should.equal(21));
  });

  it('should pass input through multiple functions', function(){
    function add2(value){return value + 2;}
    function multiplyBy3(number){return number * 3;}
    (pipe(add2, multiplyBy3, add2, multiplyBy3)(7).should.equal(87));
  });

  it('should be able to handle multiple pipes', function(){
    function add2(value){return value + 2;}
    function multiplyBy3(number){return number * 3;}
    (pipe(pipe(add2, multiplyBy3), multiplyBy3)(7).should.equal(81));
  });
});