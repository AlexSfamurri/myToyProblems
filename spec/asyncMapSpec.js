"use strict";

mocha.setup('bdd');

// const assert = window.assert = chai.assert;
// const expect = window.expect = chai.expect;
// const should = window.should = chai.should();

describe('asyncMap', function() {

  it('should exist', function(){
    should.exist(asyncMap);
  });

  it('should be a function', function(){
    asyncMap.should.be.a.Function;
  });

  it('should take two arguments', function(){
    asyncMap.length.should.equal(2);
  });

  it('should pass the completed tasks to its callback', function(done){

    // These functions aren't really asynchronous, but for the purposes of testing it works.
    function wait2For2(callback){
      setTimeout(function () {
        callback(2);
      }, 200);
    }

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    asyncMap([wait2For2, wait3For1], function(results){
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      results.should.eql([2,1]);
      results.length.should.equal(2);
      done();
    });

  });

  it('should pass the completed tasks to its callback in the correct order', function(done){

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    function wait2For2(callback){
      setTimeout(function(){
        callback(2);
      }, 200);
    }

    asyncMap([wait3For1, wait2For2], function(results){
      results.should.eql([1,2]);
      done();
    });

  });

  it('should handle more than two async functions in the correct order', function(done){
    function wait2For2(callback){
      setTimeout(function(){
        callback(2);
      }, 200);
    }

    function wait5For4(callback){
      setTimeout(function(){
        callback(4);
      }, 500);
    }

    function wait1For3(callback){
      setTimeout(function(){
        callback(3);
      }, 100);
    }

    function wait3For1(callback){
      setTimeout(function(){
        callback(1);
      }, 300);
    }

    function wait1For5(callback){
      setTimeout(function(){
        callback(5);
      }, 100);
    }

    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(results){
      results.should.eql([1,2,3,4,5]);
      done();
    });

  });

});