 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const asyncMap = function(tasks, callback){
  // Your code here
  const results = [];

  tasks.map((task, index) => {
    
    task((num)=>{

      results[index] = num;
      
    });
    setTimeout(()=>{
      
      callback(results);
    }, 1000)
  });
};
