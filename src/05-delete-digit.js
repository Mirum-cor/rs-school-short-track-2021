/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split('');
  let max = n % 10;
  for (let i = 0; i < nArr.length; i++) {
    // const digit = String(n % (10 ** (i + 1))).slice(0, 1);
    const arrWithoutDigit = [];
    // const nWithoutDigit = +nArr.filter((member) => member !== digit).join('');
    for (let j = 0; j < nArr.length; j++) {
      if (i !== j) {
        arrWithoutDigit.push(nArr[j]);
      }
    }
    const nWithoutDigit = +arrWithoutDigit.join('');
    if (nWithoutDigit > max) {
      max = nWithoutDigit;
    }
  }
  return max;
}

module.exports = deleteDigit;
