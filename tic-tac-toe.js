document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');

  // Add the 'square' class to each square
  squares.forEach(square => {
    square.classList.add('square');
  });

  let currentPlayer = 'X';
  
  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (square.textContent === '' && !document.getElementById('status').classList.contains('you-won')) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
  
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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

});
