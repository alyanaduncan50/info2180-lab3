document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');

  // Add the 'square' class to each square
  squares.forEach(square => {
    square.classList.add('square');
  });

  let currentPlayer = 'X';
  
  //Game Logic
   const statusDiv = document.getElementById('status');
   const winningCombinations = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8],
     [0, 3, 6], [1, 4, 7], [2, 5, 8],
     [0, 4, 8], [2, 4, 6]
   ];
 
   function checkWinner() {
     return winningCombinations.some(combination => {
       const [a, b, c] = combination;
       if (
         squares[a].textContent === currentPlayer &&
         squares[a].textContent === squares[b].textContent &&
         squares[a].textContent === squares[c].textContent
       ) {
         statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
         statusDiv.classList.add('you-won');
         return true;
       }
       return false;
     });
   }
 
   squares.forEach(square => {
     square.addEventListener('click', () => {
       if (square.textContent === '' && !statusDiv.classList.contains('you-won')) {
         square.textContent = currentPlayer;
         square.classList.add(currentPlayer);
         if (!checkWinner()) {
           currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
         }
       }
     });
   });

    // Hover event handling
    squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (square.textContent === '') {
        square.classList.add('hover');
      }
    });
  
    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });
  });

// Added "New Game" button functionality
const newGameButton = document.querySelector('.btn');

  newGameButton.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDiv.classList.remove('you-won');
  });
});
