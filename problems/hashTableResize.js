 /*! toyproblems v0.0.0 - MIT license */
'use strict';

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.insert = function (key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if (size >= storageLimit * 0.75) {
      // increase the size of the hash table

      resize(storageLimit * 2);
      storageLimit *= 2;
    }
  };

  result.retrieve = function (key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function (key) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if (size <= storageLimit * 0.25) {
          // decrease the size of the hash table
          resize(storageLimit / 2);
          storageLimit /= 2;
        }
        return value;
      }
    }
  };

  var resizing = false;
  function resize(newSize) {
    //Complete me!
    // console.log(size);
    
    let tuples = [];
    const bucketlist = storage.filter(isBucket => isBucket.length > 0);

    
    
    bucketlist.forEach(bucket => {
      tuples = tuples.concat(bucket);
    });
    // console.log(tuples);

    for(let i = 0; i < newSize; i++) {
      storage[i] = [];
    }
    
    tuples.forEach(tuple => {
      const index = getIndexBelowMaxForKey(tuple[0], newSize);
      const bucket = storage[index];
      bucket.push(tuple);
    });
    console.log(newSize, ' the new size should be');
    
    console.log(storage);
    
    // console.log(storage);
    // for(let i = 0; i < storage.length; i++){
    //   if(storage[i].length > 0){
    //     for(let j = 0; j < storage[i].length; j++){
    //       tuples.push(storage[i][j]);
    //     }
    //   }
    // }
    // storage.forEach(bucket =>{
    //   console.log(bucket);
      
    //   if (bucket.length) {
    //     bucket.forEach(tuple =>{
    //       console.log(tuple);
    //       tuples.push(tuple);
    //     });
    //   }
    //   return;
    // });
    // for (let i = 0; i < newSize; i++) {
    //   storage[i] = [];
    // }
    // tuples.forEach(tuple => {
    //   result.insert(tuple[0], tuple[1]);
    // });
    // for(let i = 0; i < tuples.length; i++) {
    //   result.insert(tuples[i][0], tuples[i][1]);
    // }
  }
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
