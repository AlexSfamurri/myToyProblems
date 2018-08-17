 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const makeHashTable = function(){
  const result = {};
  const storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value){
    // TODO: implement `insert()`
    //  debugger;
    const tuple = [key, value];
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    if(!Array.isArray(storage[hash])){
      storage[hash] = [];
    }
    for(let i = 0; i < storage[hash].length; i++){
      if(storage[hash][i][0] === key){
        storage[hash][i][1] = value;
        return;
      }
    }
    storage[hash].push(tuple);

  };

  result.retrieve = function(key){
    // TODO: implement `retrieve()`
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    const bucket = storage[hash];
    if(bucket === undefined){
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key){
        return bucket[i][1];
      }
    }
    return null;
  };


  result.remove = function(key){
    // TODO: implement `remove()`
    // debugger;
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    const bucket = storage[hash];
    if(bucket === undefined){
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key){
        bucket.splice(i, 1);
        return null;
      }
    }
    return null;
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};