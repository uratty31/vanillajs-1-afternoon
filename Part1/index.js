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
 
  let whichPlayer = ['PlayerOne', 'PlayerTwo']
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
    if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft) {
        alert( `${middleRight} is the winner`);
        return;
    }
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft) {
        alert( `${bottomRight} is the winner`);
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner`);
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
    }
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
            }
        }
        if (boardFull === true) {
            alert('Cats game, no winner');
    }
}