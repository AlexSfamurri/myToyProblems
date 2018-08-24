 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const asyncMap = function(tasks, callback){
  // Your code here
  const results = [];

  tasks.map(task => {
    task((num)=>{
      results.push(num);
    });
  });

  setTimeout(()=>{
    callback(results);
  }, 300);
};
