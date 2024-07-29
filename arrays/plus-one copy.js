/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;

  if (digits[i] !== 9) {
    digits[i] += 1;
  } else {
    while (digits[i] === 9) {
      digits[i] = 0;
      i--;
    }
    if (i === -1) {
      digits.unshift(1);
    } else {
      digits[i] += 1;
    }
  }

  return digits;
};

console.log(plusOne([9, 9, 9]));
