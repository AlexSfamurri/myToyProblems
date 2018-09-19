/* global toyproblems, describe, it, expect, should */

describe('makeHashTable()', function () {
  'use strict';

  it('exists', function () {
    expect(makeHashTable).to.be.a('function');

  });

  it('should be able to resize', function () {
    // if your hashtable isn't resizing, its going to start running more
    // and more slowly with a large number of inserts and retrievals.
    var hashTable = makeHashTable();
    var n = 10, id = 0, diffs = [];
    var endTime, startTime;
    for (var i = 0; i <= n; i++) {
      startTime = new Date();
      for (var j = 0; j < 1000; j++) {
        hashTable.insert('userid:' + (id++), 'Syd Mead');
      }
      for (j = 0; j < 100; j++) {
        hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
      }
      endTime = new Date();
      diffs.push(endTime - startTime);
    }
    var sum = function (arr) {
      var total = 0;
      for (var i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }
    // we should expect the first iteration to take up ruffly 1 / n
    // of the total time. we give it some wiggle room by letting it be as
    // low as a 1 / (n*2) of the total duration.
    var ratio = (diffs[0] / sum(diffs));
    ratio.should.be.above(1 / (n * 2));
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
