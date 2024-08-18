// array of 1 - n elements - 1 element is missing & 1 more is repeated once

// input = [1, 2, 3, 4, 4]

// Output = ?

const findRepeating = (arr) => {
  const occurence = {};

  for (let num of arr) {
    if (occurence[num]) {
      return num;
    } else {
      occurence[num] = 1;
    }
  }

  return null;
};

const findMissingNum = (arr) => {
  let sumOriginal = 0;
  let sumNums = 0;

  for (let i = 1; i <= arr.length; i++) {
    sumOriginal += i;
  }

  for (let val of arr) {
    sumNums += val;
  }

  const repeating = findRepeating(arr);

  sumNums -= repeating;

  return { missing: sumOriginal - sumNums, repeating };
};

console.log(findMissingNum([3, 2, 4, 5, 5]));
