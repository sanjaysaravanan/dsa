/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0;

  let j = 0;

  let max = -99999;

  let arr = [];

  while (i < nums.length) {
    if (max < nums[i]) {
      max = nums[i];
    }

    if (i - j + 1 === k) {
      arr.push(max);
      max = max - nums[j];
      j++;
    }
    i++;
  }
  return arr;
};

console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
