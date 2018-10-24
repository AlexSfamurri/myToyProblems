/* global insertionSort, describe, it, expect, should */

describe('insertionSort()', function () {
  'use strict';

  it('exists', function () {
    expect(insertionSort).to.be.a('function');

  });

  it('Should not use native sort', function () {
    insertionSort(testingTransform([1, 2, 3]));
    Array.prototype.sort.called.should.be.false;
  });

  it('Should return the original array', function () {
    var array = testingTransform([3, 2, 1]);
    var result = insertionSort(array);
    // This means that the array is sorted in-place;
    // no copies are made, and the original, modified array is returned.
    array.should.be.equal(result);
  });

  it('should sort an array numerically by value property', function(){
    var array = testingTransform([1, 100, 2, 43, 21]);
    var expected = [
      { value: 1, order: 0 },
      { value: 2, order: 2 },
      { value: 21, order: 4 },
      { value: 43, order: 3 },
      { value: 100, order: 1 },
    ];
    insertionSort(array);
    console.log(array);
    console.log(expected);
    array.should.eql(expected);
    array = testingTransform([24.3, 24.7, 23, 9]);
    insertionSort(array);
    array.should.eql([
      { value: 9, order: 3 },
      { value: 23, order: 2 },
      { value: 24.3, order: 0 },
      { value: 24.7, order: 1 },
    ]);
  });

  // Add more assertions here
});
