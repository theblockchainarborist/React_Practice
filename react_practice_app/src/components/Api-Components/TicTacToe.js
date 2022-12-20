import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState([    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(false);

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setGameOver(false);
    setTie(false);
  };

  const handleClick = (row, col) => {
    if (gameOver || board[row][col] !== '') {
      return;
    }
  
    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
  
    const winner = checkForWinner(newBoard);
    if (winner === true) {
      setGameOver(true);
    } else if (winner === 'T') {
      setGameOver(true);
      setTie(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkForWinner = board => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      return true;
    }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== '') {
      return true;
    }
  
    // Check for tie
    let isFull = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          isFull = false;
          break;
        }
      }
    }
    if (isFull) {
        return 'T';
    }
  
    return false;
  };

  return (
    <div className="tic-tac-toe">
        <p id="tic-tac-toe-title">Tic-Tac-Toe</p>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && <div className="game-over">Game over!</div>}

      {tie === true ? <div className="winner">It's a Tie!</div> : null}

      { (gameOver && !tie) ? <div className="winner">{currentPlayer} Wins!</div> : null}

      {gameOver && <div><button id="new-game-btn" variant="primary" onClick={resetGame}>Start New Game</button></div>}

      {!gameOver && <div><div className="current-player">Current player: {currentPlayer}</div></div>}
      
      
    </div>
  );
};

export default TicTacToe;