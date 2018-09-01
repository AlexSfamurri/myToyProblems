 /*! toyproblems v0.0.0 - MIT license */
'use strict';


function cipher({ alphabet, offset, message, command }) {
  // Write your code here, and
  if (command === 'encode'){
    const encodedMessage = message.split('').map((letter)=>{
      let shiftIndex = alphabet.indexOf(letter);
      if(shiftIndex !== -1){
        shiftIndex += offset;
        if (shiftIndex > alphabet.length - 1){
          shiftIndex -= alphabet.length;
        }
        return alphabet[shiftIndex];
        
      }
      return letter;
    }).join('');
    return encodedMessage;
  }

  if (command === 'decode') {
    const decodedMessage = message.split('').map((letter) => {
      let shiftIndex = alphabet.indexOf(letter);
      if (shiftIndex !== -1) {
        shiftIndex -= offset;
        if (shiftIndex < 0) {
          shiftIndex += alphabet.length;
        }
        return alphabet[shiftIndex];
      }
      return letter;
    }).join('');
    return decodedMessage;
  }


  return;
  // return your final answer.
}
