/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  // Iterate the elements with i starting from 0 - n
  // We will compare the
  // i == 0, compare the i + 1
  // i == n, compare the i - 1
  // else, compare i with i - 1 & i +1

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] > nums[i + 1]) {
      return i;
    } else if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
      return i;
    } else if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      return i;
    }
  }
};

/* console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); */
