 /*! toyproblems v0.0.0 - MIT license */
'use strict';

function reconstruct(changes) {
  // Write your code here, and
  // return your final answer.
  const lines = changes.reduce((finishedString, [entryObj]) =>{
    
    if (entryObj.type === 'add') {
      if (!finishedString) {
        return entryObj.text;
      }
      finishedString.split('\n').splice(entryObj.line, 0, entryObj.text);
      console.log(finishedString);
      
      return finishedString.join('\n');
    }


  }, '');
  console.log(lines, 'hi');
  
  return lines;
}
