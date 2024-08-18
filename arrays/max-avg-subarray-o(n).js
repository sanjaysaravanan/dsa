/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let i = 0;

  let start = 0;

  let sum = 0;

  let maxAvg = -99999;

  while (i < nums.length) {
    sum += nums[i];
    if (i - start + 1 === k) {
      const avg = sum / k;
      if (avg > maxAvg) {
        maxAvg = avg;
      }
      sum = sum - nums[start++];
    }

    i++;
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// 0 -> sum = 1, start = 0, max = -99999
// 1 -> sum = 13, start = 0, max = -99999
// 2 -> sum = 8, start = 0, max = -99999
// 3 -> sum = 2,
// max = 0.5, sum = 0
