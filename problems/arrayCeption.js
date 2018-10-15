'use strict';

const arrayception = function(input){
  // Your code here
  let count = 1;
  let depthCount = 0;
  let diver = (value) => {
    value.forEach(element => {
      if (Array.isArray(element)) {
        count++;
        diver(element);
        count--;
      } else {
        if (count > depthCount) {
          depthCount = count;
        }
      }
    });
    return depthCount;
  }

  return diver(input);

};

