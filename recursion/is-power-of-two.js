/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  }
  if (n < 2) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};
