(() => {
  const sudoku = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3],
  ];

checkRow = (board, row, num)=> {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

checkCol = (board, col, num) => {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

checkBox = (board, row, col, num) => {
  boxStartRow = Math.floor(row/3) * 3;
  boxStartCol = Math.floor(col/3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[r + boxStartRow][c + boxStartCol] === num) {
        return false;
      }
    }
  }
  return true;
}

checkPosibilities = (board, row, col, num) => {
  if (checkRow(board, row, num) && checkCol(board, col, num) && checkBox(board, row, col, num)) {
    return true;
  }
  return false;
}

solveSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (checkPosibilities(board, row, col,num)) {
            board[row][col] = num;
          if (solveSudoku(board))
            return board;
          }
        }
        board[row][col] = 0;
        return false;
      }
    }
  }
  return board;
}

solveSudoku(sudoku).map(el => console.log(el));
})()