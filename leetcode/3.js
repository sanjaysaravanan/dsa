/** 
 @param {string} s
 @return {boolean}
*/
var checkValidSubstring = (s) => {
  let strSet = new Set(s);
  return strSet.size === s.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  let n = s.length;
  let subStrMap = {};
  for (let i = 0; i < n; i++) {
    let tempIndex = 0;
    let strArr = [];
    for (let j = i; j < n; j++) {
      strArr[tempIndex++] = s[j];
      const subStr = strArr.join("");
      if (
        !subStrMap[subStr] &&
        checkValidSubstring(subStr) &&
        maxLen < subStr.length
      ) {
        maxLen = subStr.length;
        subStrMap[subStr] = 1;
      }
    }
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));
