/*
  Tic Tac Toe
  ------------------------------------------------------------------------
  A game for two players, X and O, who take turns marking the spaces 
  in a 3×3 grid. The player who succeeds in placing three of their marks 
  in a horizontal, vertical, or diagonal row is the winner.
*/

let stringifyBoard = function(board) {
    return board[0].join("   ") +
        "\n" +
        board[1].join("   ") +
        "\n" +
        board[2].join("   ");
};

let didWeWin = function(board, player) {

    // check rows

    if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
        return true;
    }

    if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
        return true;
    }

    if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
        return true;
    }

    // check columns

    if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
        return true;
    }

    if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
        return true;
    }


    // check diagonal

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
};

let isFull = function(board) {
    let i = 0;
    while (i < board.length) {
        const row = board[i];

        let i2 = 0;
        while (i2 < row.length) {
            if (row[i2] === "_") {
                return false;
            }
            i2 = i2 + 1;
        }
        i = i + 1;
    }

    return true;
};


let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];

let player = "x";

while (true) {
    let boardStr = stringifyBoard(board);

    let row = +prompt("Dear user, please provider the value for the row \n\n" + boardStr);
    let column = +prompt("Dear user, please provider the value for the column \n\n" + boardStr);

    if (board[row][column] !== "_") {
        alert("Not a legal move, you lose!");
        break;
    }

    board[row][column] = player;


    const won = didWeWin(board, player);

    if (won) {
        alert("Player " + player + " won the game!");
        break;
    }

    if (isFull(board)) {
        alert("The board is full, nobody won");
        break;
    }


    if (player === "x") {
        player = "o";
    } else {
        player = "x";
    }
}