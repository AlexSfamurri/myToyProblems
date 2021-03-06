 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const balancedParens = function(input){
  // Your code here
  const openParen = '(';
  const closeParen = ')';
  const openCurly = '{';
  const closeCurly = '}';
  const openBracket = '[';
  const closeBracket = ']';
  let charAt, at;
  at = 0;
  const next = () => {
    charAt = input[at];
    at++;
    return charAt;
  };
  let balanceParenScale = 0;
  let balanceCurlyScale = 0;
  let balanceBracketScale = 0;
  let lastChar = '';
  while(next() !== undefined){
    if(charAt === openParen){
      balanceParenScale++;
    }
    if(charAt === closeParen){
      balanceParenScale--;
      if(lastChar === openCurly || lastChar === openBracket){
        return false;
      }
    }

    if(charAt === openCurly){
      balanceCurlyScale++;
    }
    if(charAt === closeCurly){
      balanceCurlyScale--;
      if(lastChar === openBracket || lastChar === openParen){
        return false;
      }
    }
    
    if(charAt === openBracket){
      balanceBracketScale++;
    }
    if(charAt === closeBracket){
      balanceBracketScale--;
      if(lastChar === openCurly || lastChar === openParen){
        return false;
      }
    }
    
    
    if(balanceParenScale < 0 || balanceCurlyScale < 0 || balanceBracketScale < 0){
      return false;
    }
    lastChar = charAt;
  }
  if(balanceParenScale === 0 && balanceBracketScale === 0 && balanceCurlyScale === 0){
    return true;
  }else{
    return false;
  }
  
};

// For a sufficiently advanced class, being able to pass in a rules object
// might make a good extra credit exercise.


var advancedSolution = function(input, rules){
  // Your code here
};
