/**
 * @param {string} s
 * @return {boolean}
 */

const simpleMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var isValid = function (s) {
  const stack = [];

  for (const c of s) {
    if (c === "{" || c === "(" || c === "[") {
      stack.push(c);
    } else {
      const lastIn = stack.pop();
      if (simpleMap[lastIn] !== c) {
        console.log(lastIn, c);
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid("()[]{}"));
