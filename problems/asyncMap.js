 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const asyncMap = function(tasks, callback){
  // Your code here
  console.log(tasks);
  //task does not have a return value
  //the callback task use just takes a number
  //but the call back we are giving wants an array
  //we do not control the number that task gives its callback
  //i tried to make my own call back for task, but that felt counter intuitive
  //so we have a an array of tasks and we have a callback
  //currently spinning my tires in this one
  //will need to look into this further
  const results = tasks.map((task)=>{
    return task(callback);    
  });

  // for (let i = 0; i < tasks.length; i++){
  //   tasks[i](callback);
  // }
  callback(results);
};
