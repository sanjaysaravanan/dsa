/* 

1. j=0, i=0, tempIndex = -1
2. i=0, for haystack
    haystack[i] === needle[j], tempIndex = i
    i++
    j++
3. return tempIndex
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === needle) {
    return 0;
  }

  let i = 0,
    tempIndex = -1;

  while (i < haystack.length) {
    let j = 0;
    if (haystack[i] === needle[j]) {
      let currIndex = i;
      while (j < needle.length && haystack[currIndex] === needle[j]) {
        j++;
        currIndex++;
      }
      if (j === needle.length) {
        return i;
      }
    }
    i++;
  }
  return tempIndex;
};

console.log(strStr("sadbutsad", "sad"));
//console.log(strStr("leetcode", "leeto"));

/* 

sadbutsad, sad

i=0, tempIndex = -1

i=0,
  j = 0
  haystack[0] === needle[0] --> s === s
      currIndex = 0


*/
