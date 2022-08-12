// One Row of knucklebones
// Populate the board as empty
var board = [[[null,null,null],[null,null,null],[null,null,null]],
            [[null,null,null],[null,null,null],[null,null,null]]];
// this can be decided by player in final app, assume is false
// false is bot, true is player
var isPlayerTurn = false;

// player can input roll if they choose
function roll() {
    return Math.floor(Math.random() * 6) + 1;
  }

function insertRoll (num,loc,board) {
    let x = +isPlayerTurn;
    //place tile
    let idx = board[x][loc].findIndex(l => {return l == null;});
    board[x][loc][idx]=num;  
    //Replace enemy tile
    x=x+1
    if (x > 1)
        x=0;
    board[x][loc].forEach((space, i) => space==num ? board[x][loc][i] = null : null);
    return board;
  }

