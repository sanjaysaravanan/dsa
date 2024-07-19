// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  let n = 1;

  const newArr = A.sort();

  for (let i = 0; i < A.length; i++) {
    if (n === A[i]) {
      n++;
    }
  }
  return n;
}
