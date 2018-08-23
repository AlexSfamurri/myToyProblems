 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const longestRun = function(string) {
  // TODO: Your code here!
  const record = {};
  let longestTotal = 0;
  let longestKey;
  string = string.split('');
  if(string.length === 0){
    return [0, 0];
  }
  string.forEach((char, index)=> {
    if(record[char] === undefined){
      record[char] = {
        total: 1,
        start: index,
        end: index
      };
      if(longestTotal < record[char].total){
        longestTotal = record[char].total;
        longestKey = char;
      }
      return;
    }
    record[char].total++;
    record[char].end = index;
    if(longestTotal < record[char].total){
      longestTotal = record[char].total;
      longestKey = char;
    }

  });

  return [record[longestKey].start, record[longestKey].end];
  
};
