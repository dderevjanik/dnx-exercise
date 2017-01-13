/**
 * Get row and column from position
 * @param {number} position
 * @param {number} rowLength
 * @return {object}
 */
export const getRowCol = (position, rowLength) => ({
    row: Math.floor(position / rowLength),
    col: (position % rowLength)
});

/**
 * Get position from row and col
 * @param {number} row
 * @param {number} col
 * @param {number} rowLength
 * @return {number}
 */
export const getPosition = (row, col, rowLenght) =>
    (row * rowLenght + col);
