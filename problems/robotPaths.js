 /*! toyproblems v0.0.0 - MIT license */
'use strict';


const makeBoard = function (n){
  const board = [];
  for(let i = 0; i < n; i++){
    board.push([]);
    for(let j = 0; j < n; j++){
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j){
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j){
    return !!this[i][j];
  };
  return board;
};

const checkBreadCrumbs = function(n, board, i, j){
  if(i > n || j > n){
    return false;
  }
  if(i > 0 && j === 0){
    return board.hasBeenVisited(i - 1, j);
  } else if(i === 0 && j > 0){
    return board.hasBeenVisited(i, j - 1);
  }else {
    return board.hasBeenVisited(i - 1, j) ||
    board.hasBeenVisited(i + 1, j) ||
    board.hasBeenVisited(i, j - 1) ||
    board.hasBeenVisited(i, j + 1);
  }
}

const robotPaths = function (n, board, i = 0, j = 0){
  // Your code here
  if(n === 1 || n === 2){
    return n;
  }
  if(board === undefined){
    board = makeBoard(n);
  }
  let solutions = 0;
  //so for the path to be valid the top bottom left or right position needs to be true
  const diver = (x, y) => {
    console.log(x, ' -----this is x');
    console.log(y, ' ------this is y');
    
    
    if(x === n){
      solutions++;
      return;
    }
    for(let col = 0; col < n; col++){
      if(x === 0 && y === 0){
        board.togglePiece(x, y);
        diver(x + 1, col);
      }
      if(!board.hasBeenVisited(x, y)){
        board.togglePiece(x, y);
      }
      if(checkBreadCrumbs(n, board, x, y)){
        diver(x + 1, col);
      }
      board.togglePiece(x, y);
    }
    
  };
  diver(i, j);
  return solutions;
};

