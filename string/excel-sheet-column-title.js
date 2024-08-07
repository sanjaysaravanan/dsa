const numberToAlphabetMapping = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
};

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";

  let n = columnNumber;
  let i = 0;
  while (n > 0) {
    if (n <= 26) {
      res = numberToAlphabetMapping[n] + res;
      n = 0;
    } else {
      const digit = n % 26;
      const d = digit === 0 ? 26 : digit;
      res = numberToAlphabetMapping[d] + res;

      n = Math.floor((n - d) / 26);
    }
  }

  return res;
};

console.log(convertToTitle(731));
