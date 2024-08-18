/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var resStr = "";

  var tempStr = "";

  let i = s.length - 1;
  while (i >= -1) {
    if (i === -1 && resStr === "") {
      return tempStr;
    } else if (i === -1 && tempStr) {
      resStr = resStr + " " + tempStr;
      tempStr = "";
    } else if (s[i] === " " && tempStr) {
      if (resStr) {
        resStr = resStr + " " + tempStr;
      } else {
        resStr = resStr + tempStr;
      }
      tempStr = "";
    } else if (s[i] !== " ") {
      tempStr = s[i] + tempStr;
    }

    i--;
  }

  return resStr;
};

/* console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  ")); */
console.log(reverseWords("EPY2giL").length);
