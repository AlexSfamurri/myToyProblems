'use strict';
//Inputs : number of rounds, the number of possible options per round
//Outputs : a number of arrays each with a different combonation of options. intotal equalling all possible options
//Constraints: must be dynamic and works with a unknown number of rounds before
//Edgecases:
const rockPaperScissors = function(rounds = 3) {
  const results = [];
  const possibleOptions = ["rock","paper","scissors"];
  
  //need to itterate a number of times equal to the number of rounds as well as the number of different combinations
  //this is 3 to the nth power
  const matirxMaker = (n, round = [])=>{
    for (let option = 0; option < possibleOptions.length; option++) {
      round.push(possibleOptions[option]);
      if(n === rounds){
        results.push(round.slice());
      }else{
        matirxMaker(n + 1, round);
      }
      round.pop();
    }
  };
  
  matirxMaker(1);

  return results;
};
  