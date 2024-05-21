/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let columns = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
    }
    let squares = {
        0: [[], [], []],
        1: [[], [], []],
        2: [[], [], []]
    }
    let row = []

    let valid = true
    //rows & columns
    for(let i = 0; i < board.length; i++){ //rows
        for(let j = 0; j < board[i].length; j++){ //columns
            if(board[i][j] != '.'){
                if(!row.includes(board[i][j]) && !columns[j].includes(board[i][j]) && !squares[Math.floor(i/3)][Math.floor(j/3)].includes(board[i][j])){
                    row.push(board[i][j])
                    columns[j].push(board[i][j])
                    squares[Math.floor(i/3)][Math.floor(j/3)].push(board[i][j])
                }
                else{
                    valid = false
                    break
                }
            }
        }
        row = []
    }

    return valid
};
