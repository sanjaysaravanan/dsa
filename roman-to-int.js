/**
 * @param {string} s
 * @return {number}
 */

const numberMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const testC = s[i + 1];

    if (
      (c === "I" && (testC === "V" || testC === "X")) ||
      (c === "X" && (testC === "L" || testC === "C")) ||
      (c === "C" && (testC === "D" || testC === "M"))
    ) {
      sum -= numberMap[c];
    } else {
      sum += numberMap[c];
    }
  }
  return sum;
};

const res = romanToInt("MCMXCIV");

console.log(res);
