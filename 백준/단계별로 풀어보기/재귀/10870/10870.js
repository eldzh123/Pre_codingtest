const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const n = +input;

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function solution(n) {
  if (n === 0) {
    console.log(0);
  } else if (n === 1 || n === 2) {
    console.log(1);
  } else {
    console.log(fibonacci(n));
  }
}

solution(n);
