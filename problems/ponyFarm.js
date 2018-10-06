
'use strict';

function getPonyAllergies(ponies, ownerEmail) {
  // Your code here
    return ponies.reduce((foods, ponyObj) => {    
    if (ponyObj.email === ownerEmail){
      let filtered = ponyObj.allergies.filter((isAccountedFor) => {
        return !foods.includes(isAccountedFor);
      })      
      foods = foods.concat(filtered);
    }
    return foods;
  }, []).sort();
}
