/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0;

  let last = 0;

  for (const c of s) {
    if (c === " ") {
      if (len > 0) {
        last = len;
      }
      len = 0;
    } else {
      len++;
    }
  }

  if (len) {
    return len;
  }
  return last;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
