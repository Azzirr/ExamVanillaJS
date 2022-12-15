const n = null;
const board = [ [7, n, 4, 8, n, n, 3, n, 1],
                [8, 2, n, 5, n, n, n, 4, n],
                [n, n, 9, 4, 3, n, 5, n, n],
                [3, 1, n, n, n, n, 8, n, 7],
                [n, 8, n, n, n, n, n, 1, n],
                [9, n, 7, n, n, n, n, 3, 2],
                [n, n, 6, n, 1, 5, 4, n, n],
                [n, 7, n, n, n, 9, n, 6, 5],
                [5, n, 8, n, n, 2, 1, n, 3]
              ]
// putting correct board on the screen
function putBoard(){
    let count = 0
    for(let x = 0; x < board.length; x++){
        for(let i = 0; i < board[x].length; i++){
            let groundId = document.getElementById((count + 1));
            groundId.innerHTML = board[x][i]
            count++
        }
    }
}
putBoard()

