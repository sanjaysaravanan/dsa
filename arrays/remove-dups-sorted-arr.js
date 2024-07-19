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
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let dupCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== undefined && nums[i] === nums[i + 1]) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
          break;
        } else {
          nums[j] = undefined;
          console.log(nums[j]);
          dupCount++;
        }
      }
    }
  }

  // move all the undefined to the end of the list
  moveNullToLast(nums);

  nums.length = nums.length - dupCount;
};

//const nums = [0, 0, 1, 1];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

console.log(nums);
