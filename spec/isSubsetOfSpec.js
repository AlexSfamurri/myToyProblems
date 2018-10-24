/* global toyproblems, describe, it, expect, should */

describe('[].isSubsetOf()', function () {
  'use strict';

  it('exists', function () {
    expect(['cat', 'dog', 'cow'].isSubsetOf).to.be.a('function');

  });

  it('does something', function () {
    var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']);
    result.should.equal(true);
  });

  it('does something else', function () {
    var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
    result.should.equal(false);
  });

  it('should disregard duplicates', function(){
    ['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog']).should.equal(true);
    ['cat', 'cat', 'dog'].isSubsetOf(['cat']).should.equal(false);
  });

  // Add more assertions here
});
