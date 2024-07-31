/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMap = {};

  const vals = [];

  // map the values
  for (let i in s) {
    if (vals.includes(t[i]) && hashMap[s[i]] !== t[i]) {
      return false;
    }
    hashMap[s[i]] = t[i];
    vals.push(t[i]);
  }

  // construct string using map
  let res = "";

  for (let c of s) {
    res += hashMap[c];
  }

  return res === t;
};

console.log(isIsomorphic("foo", "bar"));
