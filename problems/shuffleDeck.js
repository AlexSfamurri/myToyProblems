 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const randomDex = function(size){
  
  return Math.floor(Math.random() * size);
};

const shuffleDeck = function(deck) {
  // Your code here
  deck.forEach((card, index)=>{
    let swapIndex = randomDex(deck.length - 1);
    let swap = deck[swapIndex];
    deck[swapIndex] = card;
    deck[index] = swap;
 });
 
  deck.forEach((card, index)=>{
    let swapIndex = randomDex(deck.length - 1);
    let swap = deck[swapIndex];
    deck[swapIndex] = card;
    deck[index] = swap;
 });
 return deck;
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
const orderedDeck = function() {
  const suits = [ 'â¥', 'â£', 'â ', 'â¦' ];
  const values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  const deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};