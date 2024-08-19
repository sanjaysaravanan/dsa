const checkVowel = (c) => {
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    return true;
  }
  return false;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let i = 0;
  let maxCount = 0;
  let vowelCount = 0,
    start = 0;
  while (i < s.length) {
    if (checkVowel(s[i])) {
      vowelCount++;
    }
    if (i - start + 1 === k) {
      if (vowelCount > maxCount) {
        maxCount = vowelCount;
      }
      if (checkVowel(s[start])) {
        vowelCount -= 1;
      }
      start++;
    }

    i++;
  }

  return maxCount;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
