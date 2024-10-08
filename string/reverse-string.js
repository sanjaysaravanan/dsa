/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    // Swapping the numbers
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
};

// const arr = ["h", "e", "l", "l", "o"];
const arr = ["H", "a", "n", "n", "a", "h"];

reverseString(arr);

console.log(arr);
