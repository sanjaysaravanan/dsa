/*

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise. 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};

  for (let v of arr) {
    if (map[v]) {
      map[v] += 1;
    } else {
      map[v] = 1;
    }
  }

  const values = [];
  for (let key in map) {
    if (values.includes(map[key])) {
      return false;
    }
    values.push(map[key]);
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
console.log(uniqueOccurrences([1, 2]));
