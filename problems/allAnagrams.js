 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const allAnagrams = (string) => {
  const anagrams = {};

  const diver = (prev, curr) => {
    if(prev.length === string.length){
      anagrams[prev] = true;
    }

    for(let i = 0; i < curr.length; i++){
      recurse(prev + curr[i], curr.slice(0, i) + curr.slice(i + 1));
    }
  };
  recurse('', string);
  return Object.keys(anagrams);
}