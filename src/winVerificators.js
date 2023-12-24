/**
 * Checks for a horizontal sequence for win
 * @param {Object[]} valueGrid
 * @param {string} currentPlayer
 * @returns {Object[]|null}
 */
export const horizontalCheck = (valueGrid, currentPlayer) => {
  for (let i = 0; i < 3; i++) {
    if (
      valueGrid[i][0].value === currentPlayer &&
      valueGrid[i][1].value === currentPlayer &&
      valueGrid[i][2].value === currentPlayer
    )
      return [
        { x: i, y: 0 },
        { x: i, y: 1 },
        { x: i, y: 2 },
      ];
  }
  return null;
};

/**
 * Checks for a vertical sequence for win
 * @param {Object[]} valueGrid
 * @param {string} currentPlayer
 * @returns {Object[]|null}
 */
export const verticalCheck = (valueGrid, currentPlayer) => {
  for (let i = 0; i < 3; i++) {
    if (
      valueGrid[0][i].value === currentPlayer &&
      valueGrid[1][i].value === currentPlayer &&
      valueGrid[2][i].value === currentPlayer
    )
      return [
        { x: 0, y: i },
        { x: 1, y: i },
        { x: 2, y: i },
      ];
  }
  return null;
};

/**
 * Checks for a vertical sequence for win
 * @param {Object[]} valueGrid
 * @param {string} currentPlayer
 * @returns {Object[]|null}
 */
export const diagonalCheck = (valueGrid, currentPlayer) => {
  if (
    valueGrid[0][0].value === currentPlayer &&
    valueGrid[1][1].value === currentPlayer &&
    valueGrid[2][2].value === currentPlayer
  ) {
    return [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
  } else if (
    valueGrid[0][2].value === currentPlayer &&
    valueGrid[1][1].value === currentPlayer &&
    valueGrid[2][0].value === currentPlayer
  ) {
    return [
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ];
  } else {
    return null;
  }
};
