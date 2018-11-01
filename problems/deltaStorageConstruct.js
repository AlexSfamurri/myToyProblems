 /*! toyproblems v0.0.0 - MIT license */
'use strict';

function reconstruct(changes){
  // Write your code here, and
  // return your final answer.
  // console.log(changes);
  
  const lines = changes.reduce((finishedString, entryArr) =>{
    // console.log(entryObj);
    // debugger;x
    
    return entryArr.reduce((internalAdjusts, innerObj) => {
      internalAdjusts = internalAdjusts.split('\n').filter(isBlank => isBlank !== '');
      if(innerObj.type === 'add') {
        internalAdjusts.splice(innerObj.line, 0, innerObj.text);
      }
      if(innerObj.type === 'rem') {
        internalAdjusts.splice(innerObj.line, innerObj.count);
      }
      internalAdjusts = internalAdjusts.map(valueThatNeedsNewline => {
        if(!valueThatNeedsNewline.includes('\n')){
          return valueThatNeedsNewline + '\n';
        }
        return valueThatNeedsNewline;
      })
      console.log(internalAdjusts);
      return internalAdjusts.filter(isBlankSpace => isBlankSpace !== '').join(' ');
    }, finishedString);
  }, '');
  console.log(lines);
  
  return lines.split(' ').filter(isBlank => isBlank !== '').join('\n').split('\n').filter(isBlank => isBlank !== '').join('\n') + '\n';
}
