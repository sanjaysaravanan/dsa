function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split("");

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (isVowel(arr[i]) && isVowel(arr[j])) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    } else if (!isVowel(arr[i])) {
      i++;
    } else if (!isVowel(arr[j])) {
      j--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("leetcode"));
