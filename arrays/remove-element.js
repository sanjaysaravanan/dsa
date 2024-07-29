const moveNullToLast = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      let changeIndex = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === undefined) {
          continue;
        } else {
          nums[changeIndex] = nums[j];
          nums[j] = undefined;
          changeIndex++;
        }
      }
    }
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let removeCount = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = undefined;
      removeCount++;
    }
  }
  moveNullToLast(nums);
  nums.length = nums.length - removeCount;
};

var nums = [3, 2, 2, 3];

removeElement(nums, 3);

console.log(nums);
