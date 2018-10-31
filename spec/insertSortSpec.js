/* global insertionSort, describe, it, expect, should */

describe('insertionSort()', function () {
  'use strict';

  it('exists', function () {
    expect(insertionSort).to.be.a('function');

  });

  it('should sort according to the passed comparator', function () {
    var array = testingTransform([1, 2, 3, 4, 5]);
    insertionSort(array, function (a, b) {
      return b.order - a.order;
    });
    array.should.eql([
      { value: 5, order: 4 },
      { value: 4, order: 3 },
      { value: 3, order: 2 },
      { value: 2, order: 1 },
      { value: 1, order: 0 },
    ]);
    var array = [0, 1, 2, 3, 4, 5];
    insertionSort(array, function (a, b) {
      var aIsOdd = a & 1;
      var bIsOdd = b & 1;
      
      return aIsOdd - bIsOdd;
    });
    array.should.eql([0, 2, 4, 1, 3, 5]);
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
