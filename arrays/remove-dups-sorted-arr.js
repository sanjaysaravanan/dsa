/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Compare i & i+1 for equality if equal take i+1 and make it the last element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
          break;
        } else {
          nums[j] = undefined;
        }
      }
    }
  }

  // move all the undefined to the end of the list
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
        nums[j + 1] = undefined;
      }
    }
  }
};

const nums = [0, undefined, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

const moveNullToLast = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      for (let j = i; j < nums.length - 1; j++) {
        if (nums[j + 1] === undefined) {
          continue;
        } else {
          nums[j] = nums[j + 1];
          nums[j + 1] = undefined;
        }
      }
    }
  }
  return nums;
};

console.log(
  moveNullToLast([0, undefined, 1, undefined, undefined, 2, 2, 3, 3, 4])
);
