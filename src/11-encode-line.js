/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  let counter = 1;
  let res = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i + 1] && strArr[i + 1] === strArr[i]) {
      counter++;
    } else if (counter > 1) {
      res += `${counter}${strArr[i]}`;
      counter = 1;
    } else {
      res += strArr[i];
    }
  }
  return res;
}

module.exports = encodeLine;
