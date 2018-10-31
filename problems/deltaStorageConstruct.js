 /*! toyproblems v0.0.0 - MIT license */
'use strict';

function reconstruct(changes){
  // Write your code here, and
  // return your final answer.
  // console.log(changes);
  
  const lines = changes.reduce((finishedString, entryArr) =>{
    // console.log(entryObj);
    if(entryArr.length > 1){
      const entryObj = [entryArr];
      if(finishedString === '') {
        return entryObj.text;
      }
      finishedString = finishedString.split('\n');
      if (entryObj.type === 'add') {      
        finishedString.splice(entryObj.line, 0, entryObj.text);
        
        
      }
      
      if (entryObj.type === 'rem') {
        finishedString.splice(entryObj.line, entryObj.count);
      }
      // console.log(finishedString);
      
      return finishedString.join('') + '\n';
    } else {
      return entryArr.reduce((internalAdjusts, innerObj) => {
        console.log(internalAdjusts);
        
        internalAdjusts = internalAdjusts.split('\n');
        if(innerObj.type === 'add') {
          internalAdjusts.splice(innerObj.line, 0, innerObj.text);
        }

        if(innerObj.type === 'rem') {
          internalAdjusts.splice(innerObj.line, innerObj.count);
        }

        return internalAdjusts.join('') + '\n';
      }, finishedString);
    }


  }, '');
  
  return lines;
}
