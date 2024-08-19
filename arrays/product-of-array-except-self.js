/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let countZeros = 0;

  let product = 1;

  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      product *= nums[i];
    } else if (nums[i] === 0) {
      if (countZeros === 1) {
        return new Array(nums.length).fill(0);
      }
      countZeros++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr[i] = product;
    } else if (countZeros) {
      arr[i] = 0;
    } else {
      arr[i] = product / nums[i];
    }
  }
  return arr;
};

console.log(productExceptSelf([1, 2, 3, 4]));
