/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const strOne = strs[0];

  let resStr = "";

  let endFlag = false;

  for (let i = 0; i < strOne.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strOne[i] !== strs[j][i]) {
        endFlag = true;
        break;
      }
    }
    if (endFlag) {
      break;
    } else {
      resStr += strOne[i];
    }
  }

  return resStr;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
