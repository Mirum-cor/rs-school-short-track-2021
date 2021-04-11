/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let counter = 0;
      if (!matrix[i][j]) {
        for (let row = i - 1; row < i + 2; row++) {
          for (let column = j - 1; column < j + 2; column++) {
            if (
              row >= 0
                && row < matrix.length
                && column >= 0
                && column < matrix.length
            ) {
              if (matrix[row][column]) {
                counter++;
              }
            }
          }
        }
      } else {
        counter++;
      }
      res[i].push(counter);
    }
  }
  return res;
}

module.exports = minesweeper;
