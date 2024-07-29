/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // nums1
  // fill the elements of nums2 into num1 after m
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }

  nums1.sort((a, b) => {
    if (a >= b) {
      return 1;
    } else {
      return -1;
    }
  });
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
