 /*! toyproblems v0.0.0 - MIT license */
'use strict';
/* eslint-disable no-extend-native */
const bind = function (func, context, ...args) {
  // TODO: Your code here
  // console.log(context);
  
  return function(...stuff){
    
    return func.apply(context, args.concat(stuff));
  };
};

Function.prototype.bind = function (context, ...args) {
  // TODO: Your code here
  const func = this;
  return function(...stuff){
    return func.apply(context, args.concat(stuff));
  };
};
