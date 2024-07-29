const input = [
  [1, -2, 3],
  [4, -5, 6],
  [
    [7, -8, 9],
    [10, -11, 12],
  ],
  [13, -14, 15],
];

// Output: [-2, -5, -8, -11, -14]

const res = [];

const flattenArray = (arr) => {
  for (const val of arr) {
    if (typeof val === "object") {
      flattenArray(val);
    } else if (val < 0) {
      res.push(val);
    }
  }
};

flattenArray(input);

console.log(res);
