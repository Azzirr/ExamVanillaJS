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
const verticalBoard = [[], [], [], [], [], [], [], [], []];
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

// create vertical arrays
function verticalArrays(){
    for(let j = 0; j < 9; j++){
        for(let i = 0; i < board.length; i++){
            verticalBoard[j].push(board[i].slice(0, 1))
        }
    }
}
verticalArrays()

// pushing unique values to null items in horizontal array

function pushHorizontal(){
    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === null){
                board[i][j] = generateRandomNumber(1, 9)
            }
        }
    }
}
pushHorizontal()
putBoard()
