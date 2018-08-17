/* global deepEquals, describe, it, expect, should */

describe('deepEquals()', function () {
  'use strict';

  it('exists', function () {
    expect(deepEquals).to.be.a('function');

  });

  it('should return a result', function () {
    const result = deepEquals({}, {});
    should.exist(result);
  });

  it('should return true for two empty objects', function () {
    deepEquals({}, {}).should.be.true;
  });

  it('should return true for two objects with the same keys and values',function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    deepEquals(a, b).should.be.true;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a,b).should.be.true;
  })

  // Add more assertions here
});
