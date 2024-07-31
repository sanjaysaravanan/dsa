/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = {};
  const mapT = {};

  for (let c of s) {
    if (mapS[c]) {
      mapS[c] += 1;
    } else {
      mapS[c] = 1;
    }
  }

  for (let c of t) {
    if (mapT[c]) {
      mapT[c] += 1;
    } else {
      mapT[c] = 1;
    }
  }

  for (let key in mapS) {
    if (mapS[key] !== mapT[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("rat", "car"));
