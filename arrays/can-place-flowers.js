/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;

  while (i < flowerbed.length && n) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1] && n) {
      flowerbed[i] = 1;
      n--;
    }

    i++;
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
