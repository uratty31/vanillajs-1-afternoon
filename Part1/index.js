const board = [];
//Set up for the board.
function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

    const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];
  
//   Assigning X & O to players 1 & 2
 
  const whichPlayer =['PlayerOne', 'PlayerTwo']
   if (playerSpan.innerText === 'X') {
    whichPlayer = whichPlayer[0];
   } if (playerSpan.innerText === 'O') {
       whichPlayer = whichPlayer[1];
   }

  //Checking for a winner or draw
    if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
        alert( `${topRight} is the winner`);
        return;
    }
}