const n = null;
let board = [   [7, n, 4, 8, n, n, 3, n, 1],
                [8, 2, n, 5, n, n, n, 4, n],
                [n, n, 9, 4, 3, n, 5, n, n],
                [3, 1, n, n, n, n, 8, n, 7],
                [n, 8, n, n, n, n, n, 1, n],
                [9, n, 7, n, n, n, n, 3, 2],
                [n, n, 6, n, 1, 5, 4, n, n],
                [n, 7, n, n, n, 9, n, 6, 5],
                [5, n, 8, n, n, 2, 1, n, 3]
              ]
const boardA = [[n, 2, n, n, n, 9, 5, n, n],
                [9, n, n, 7, n, n, 3, 2, n],
                [6, n, n, 4, 5, n, 1, n, n],
                [8, n, 1, 5, n, n, n, 6, 2],
                [3, 4, n, 6, n, n, n, 1, n],
                [2, 5, 6, 1, n, n, 4, 3, n],
                [1, n, n, n, n, 4, n, n, 8],
                [n, n, 4, 8, 3, 5, 2, n, n],
                [5, n, 8, n, n, n, 7, 4, n]
               ]
const boardB = [[9, 1, n, n, n, n, n, 8, n],
                [n, n, 7, 9, 6, n, 3, n, n],
                [n, n, n, n, n, 5, n, n, n],
                [n, n, 6, 4, 3, n, 9, n, n],
                [n, n, n, n, 2, n, n, n, n],
                [7, n, n, n, n, n, n, n, 6],
                [n, n, 4, n, n, 2, n, n, n],
                [n, n, n, n, n, 7, 5, n, n],
                [8, n, n, 5, 4, n, n, 3, n]
               ]

// putting correct board on the screen
function putBoard(data){
    let count = 0
    for(let x = 0; x < data.length; x++){
        for(let i = 0; i < data[x].length; i++){
            let groundId = document.getElementById((count + 1));
            groundId.innerHTML = data[x][i]
            count++
        }
    }
}

function isValid(board, row, col, k){
    for(let i = 0; i < 9; i++){
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

function sudokuSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == null) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = k;
            if (sudokuSolver(data)) {
             return true;
            } else {
             data[i][j] = null;
            }
           }
         }
         return false;
       }
     }
   }
   return true;
  }

//Board 1 - from task
function board1(){
    sudokuSolver(board);
    putBoard(board)
}
//Board 2 - easy
function board2(){
    sudokuSolver(boardA);
    putBoard(boardA)
}
//Board 3 - hard
function board3(){
    sudokuSolver(boardB);
    putBoard(boardB)
}