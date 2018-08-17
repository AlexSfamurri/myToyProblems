 /*! toyproblems v0.0.0 - MIT license */
'use strict';

/**Step 1: Implement the function Compose:
Compose should return a function that is the composition of a 
list of functions of arbitrary length.

Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Compose Example:

 */
const compose = function(...functions){
  // Your code here
 return (callback, ...args) => {
   return functions.reduceRight((lastFunc, currentFunc)=>{
     return currentFunc(lastFunc, ...args);
   }, callback)
 }
};

/**Step 2: Implement the function Pipe:
Pipe composes a series of functions and returns the resulting function.

Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

Pipe Example:

 */
const pipe = function(...functions){
  // Your code here
  return (callback, ...args) => {
    return functions.reduce((lastFunc, currentFunc)=>{
      return currentFunc(lastFunc, ...args);
    }, callback)
  }
};
//HINT: You should use the functions reduce() and reduceRight()
// in your solutions.