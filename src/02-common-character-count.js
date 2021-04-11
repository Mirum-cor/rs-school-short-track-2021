/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function countLetters(str) {
  const arr = str.split('');
  const letters = {};
  arr.forEach((symbol) => {
    if (letters[symbol]) {
      letters[symbol]++;
    } else {
      letters[symbol] = 1;
    }
  });
  return letters;
}

function getCommonCharacterCount(s1, s2) {
  const letters1 = countLetters(s1);
  const letters2 = countLetters(s2);
  let res = 0;
  Object.keys(letters1).forEach((key) => {
    if (letters1[key] && letters2[key]) {
      res += Math.min(letters1[key], letters2[key]);
    }
  });
  return res;
}

module.exports = getCommonCharacterCount;
