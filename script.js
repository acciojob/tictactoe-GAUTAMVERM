//your JS code here. If required.
    const submitBtn = document.getElementById('submit');
    const board = document.getElementById('board');
    const message = document.querySelector('.message');
    const grid = document.getElementById('grid');
    let currentPlayer = 'X';
    let gameActive = true;
    let player1 = '';
    let player2 = '';
    let playerTurn = '';

    const winPatterns = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    function checkWinner() {
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cellA = document.getElementById(a).textContent;
        const cellB = document.getElementById(b).textContent;
        const cellC = document.getElementById(c).textContent;

        if (cellA && cellA === cellB && cellB === cellC) {
          gameActive = false;
          message.textContent = `${playerTurn}, congratulations you won!`;
          return true;
        }
      }
      return false;
    }

    function updateMessage() {
      playerTurn = currentPlayer === 'X' ? player1 : player2;
      message.textContent = `${playerTurn}, you're up`;
    }

    submitBtn.addEventListener('click', () => {
      player1 = document.getElementById('player-1').value.trim();
      player2 = document.getElementById('player-2').value.trim();

      if (player1 && player2) {
        document.getElementById('start-screen').style.display = 'none';
        board.style.display = 'block';
        updateMessage();
      } else {
        alert("Please enter names for both players.");
      }
    });

    grid.addEventListener('click', (e) => {
      if (!gameActive) return;

      const cell = e.target;
      if (!cell.classList.contains('cell') || cell.textContent !== '') return;

      cell.textContent = currentPlayer;

      if (!checkWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateMessage();
      }
    });