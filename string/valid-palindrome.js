/* 
  1. convert all the chars to lowercase
  
  2. replace all the empty space & special characters to ''

  3. now compare the string in a reverse with two pointers till the mid-way

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let compStr = "";
  for (let c of s.toLowerCase()) {
    if (
      (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) ||
      (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
    ) {
      compStr += c;
    }
  }

  let i = 0,
    j = compStr.length - 1;

  while (i <= j) {
    if (compStr[i] !== compStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("0P"));
