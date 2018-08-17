/* global toyproblems, describe, it, expect, should */

describe('makeHashTable()', function () {
  'use strict';

  it('exists', function () {
    expect(makeHashTable).to.be.a('function');

  });

  it('should not throw an error with valid input', function () {
    (function(){
      var hashTable = makeHashTable();
      hashTable.insert('keanu reeves best movie', 'The Matrix');
      // calling insert should not throw an error
    }).should.not.throw();
  });

  it('should allow values to be updated', function () {
    var hashTable = makeHashTable();
    hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
    hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
    var value = hashTable.retrieve('Tarantino\'s best movie');
    should.exist(value);
    value.should.be.equal('Pulp Fiction');
  });

  it('should remove items from the table', function() {
    var hashTable = makeHashTable();
    hashTable.insert('Spielberg\'s best movie', 'Jaws');
    hashTable.remove('Spielberg\'s best movie');
    var value = hashTable.retrieve('Spielberg\'s best movie');
    should.not.exist(value);
  })

  // Add more assertions here
});
