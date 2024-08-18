/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let i = 0;

  const findAvg = (start, end) => {
    let sum = 0;
    while (start < end) {
      sum += nums[start++];
    }

    return sum / k;
  };

  let maxAvg = -99999;

  while (i + k <= nums.length) {
    const avg = findAvg(i, i + k);
    if (avg > maxAvg) {
      maxAvg = avg;
    }
    i++;
  }
  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
