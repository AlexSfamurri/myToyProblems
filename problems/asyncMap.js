 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const asyncMap = function(tasks, callback){
  // Your code here
  const results = [];
  let leftToRun = tasks.length;
  tasks.map((task, index) => {
    
    task((num)=>{

      results[index] = num;
      leftToRun--;
      if(leftToRun === 0){
        callback(results);
      };

    });
  });
};
