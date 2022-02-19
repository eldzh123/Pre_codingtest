const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function solution(N) {
  if (N === 0) {
    console.log(1);
  } else {
    console.log(factorial(N));
  }
}

solution(N);
