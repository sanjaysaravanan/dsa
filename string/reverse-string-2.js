/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let j = k - 1;
  let t = 0;
  let res = "";
  // start i = 0
  for (var i = 0; i < s.length; i++) {
    if (j >= t) {
      res += s[j];
      j--;
    } else if (i === 2 * k - 1) {
      j = i + k;
      t = i + 1;
      res += s[i];
    } else {
      res += s[i];
    }
  }
  return res;
};

console.log(reverseStr("abcdefg", 2));
