/* 

Step 1:
  Check if target presents inside nums array
  Yes:
    for loop to find the index of the target inside array
  
  No:
    iterate till the nums have lesser number, if You encounter any number greater than target return i+1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i;
      }
    }
  }

  return nums.length;
};
