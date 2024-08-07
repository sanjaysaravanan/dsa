/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // Iterate each character of the string
  // keep a variable substr = ''
  // on each iteration add the chars to the substring
  // now multiply the substr till reach or exceeds the length of the original string

  let substr = "";

  for (let i = 0; i < s.length; i++) {
    substr += s[i];

    let tempStr = substr;

    while (tempStr.length <= s.length) {
      tempStr += substr;
      if (tempStr === s) {
        return true;
      }
    }
  }

  return false;
};

console.log(repeatedSubstringPattern("aba"));

// aaabbbaaabbb
