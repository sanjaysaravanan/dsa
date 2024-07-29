/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var strInt = "";

  for (let i = 0; i < digits.length; i++) {
    strInt += digits[i];
  }
  let resInt = BigInt(strInt) + BigInt(1);
  let resStr = resInt.toString();

  let result = [];

  for (let i = 0; i < resStr.length; i++) {
    result[i] = Number(resStr[i]);
  }
  return result;
};

console.log(plusOne([4, 3, 2, 1]));
