 /*! toyproblems v0.0.0 - MIT license */
'use strict';


const makeBoard = function(n){
  const board = [];
  for(let i = 0; i < n; i++){
    board.push([]);
    for(let j = 0; j < n; j++){
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j){
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j){
    return !!this[i][j];
  };
  return board;
};

const robotPaths = function(n, board){
  // Your code here
  board = makeBoard(n);
  let numSolutions = 0;
  const recurse = (row, col) => {

    board.togglePiece(row, col);
    // console.log(board);
    
    if (row === n - 1 && col === n - 1){
      numSolutions++
      board.togglePiece(row, col);
      return;
    }

    if ( row - 1 > -1 && !board.hasBeenVisited(row - 1, col)){
      recurse(row - 1, col);
    }

    if ( col - 1 > -1 && !board.hasBeenVisited(row, col - 1)) {
      recurse(row, col - 1);
    }

    if (row + 1 < n && !board.hasBeenVisited(row + 1, col)) {
      recurse(row + 1, col);
    }

    if (col + 1 < n && !board.hasBeenVisited(row, col + 1)) {
      recurse(row, col + 1);
    }

    board.togglePiece(row, col);
  }
  recurse(0, 0);

  return numSolutions;
};

