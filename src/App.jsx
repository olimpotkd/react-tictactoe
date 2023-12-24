import { useState } from "react";
import "./App.css";
import Square from "./Square";
import {
  diagonalCheck,
  horizontalCheck,
  verticalCheck,
} from "./winVerificators";

function App() {
  const [valueGrid, setValueGrid] = useState([
    [
      { value: "", highlight: false },
      { value: "", highlight: false },
      { value: "", highlight: false },
    ],
    [
      { value: "", highlight: false },
      { value: "", highlight: false },
      { value: "", highlight: false },
    ],
    [
      { value: "", highlight: false },
      { value: "", highlight: false },
      { value: "", highlight: false },
    ],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playsLeft, setPlaysLeft] = useState(9);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (x, y) => {
    if (winner || gameOver) return;
    setPlaysLeft(playsLeft + 1);
    const grid = [...valueGrid];
    if (!grid[x][y].value) {
      grid[x][y].value = currentPlayer;
      setValueGrid(grid);
    }

    checkForWin();
  };

  const highlightWinningPlay = (coordinates) => {
    const grid = [...valueGrid];
    coordinates.forEach((coor) => (grid[coor.x][coor.y].highlight = true));
  };

  const checkForWin = () => {
    if (gameOver) {
      return;
    }

    const horizontalWin = horizontalCheck(valueGrid, currentPlayer);

    if (horizontalWin) {
      setWinner(currentPlayer);
      setGameOver(true);
      highlightWinningPlay(horizontalWin);
      return;
    }

    const verticalWin = verticalCheck(valueGrid, currentPlayer);

    if (verticalWin) {
      setWinner(currentPlayer);
      setGameOver(true);
      highlightWinningPlay(verticalWin);
      return;
    }

    const diagonalWin = diagonalCheck(valueGrid, currentPlayer);

    if (diagonalWin) {
      setWinner(currentPlayer);
      setGameOver(true);
      highlightWinningPlay(diagonalWin);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    if (playsLeft > 0) {
      setPlaysLeft(playsLeft - 1);
    } else {
      setGameOver(true);
    }
  };

  const restart = () => {
    setValueGrid([
      [
        { value: "", highlight: false },
        { value: "", highlight: false },
        { value: "", highlight: false },
      ],
      [
        { value: "", highlight: false },
        { value: "", highlight: false },
        { value: "", highlight: false },
      ],
      [
        { value: "", highlight: false },
        { value: "", highlight: false },
        { value: "", highlight: false },
      ],
    ]);
    setWinner(null);
    setCurrentPlayer("X");
    setGameOver(false);
    setPlaysLeft(9);
  };

  return (
    <>
      <h1>Tic tac toe</h1>
      {winner ? (
        <>
          <h2>{winner} WINS!</h2>
          <button type="button" onClick={restart}>
            Start again
          </button>
        </>
      ) : (
        <h2>Current player: {currentPlayer}</h2>
      )}
      <table>
        <tbody>
          {valueGrid.map((row, i) => (
            <tr key={i}>
              {row.map((square, j) => (
                <Square
                  key={j}
                  squareData={square}
                  handleOnClick={handleSquareClick}
                  x={i}
                  y={j}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
